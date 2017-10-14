import { Observer } from 'rxjs/Observer';
import { Observable } from 'rxjs/Observable';
import { Subscriber } from 'rxjs/Subscriber';
import { Operator } from 'rxjs/Operator';
import { map } from 'rxjs/operator/map';
import { pluck } from 'rxjs/operator/pluck';
import { distinctUntilChanged } from 'rxjs/operator/distinctUntilChanged';

import { Dispatcher } from './dispatcher';
import { State } from './state';
import { Reducer } from './reducer';


export class Store extends Observable{
  constructor(_reducer, state$, _dispatcher) {
    super();
    this._dispatcher = _dispatcher;
    this._reducer = _reducer;
    this.source = state$

    this.getState = () => {
      return this.source.getValue();
    }
    
    const subscribe = this.__proto__.subscribe;
    this.subscribe = function(){
      const subscriber = subscribe.apply(this, arguments);
      return subscriber.unsubscribe.bind(subscriber);
    };
    this._subscribe = this.__proto__._subscribe;

    this.dispatch = (action) => {
      this._dispatcher.next(action);
    }
  }
  
  select(pathOrMapFn, ...paths){
    let mapped$;

    const source = map.call(this, (state) => {
      if (state.computedStates) {
        state = state.computedStates[state.currentStateIndex];
        state = state.state ? state.state : _initialState;
      }
      return state;
    });
    if (typeof pathOrMapFn === 'string') {
      mapped$ = pluck.call(source, pathOrMapFn, ...paths);
    }
    else if (typeof pathOrMapFn === 'function') {
      mapped$ = map.call(source, pathOrMapFn);
    }
    else {
      throw new TypeError(`Unexpected type ${ typeof pathOrMapFn } in select operator,`
        + ` expected 'string' or 'function'`);
    }

    return distinctUntilChanged.call(map.call(mapped$, state => {
      if(state.computedStates){
        state = state.computedStates[state.currentStateIndex];
        state = state.state ? state.state : _initialState
      }
      return state;
    }));
  }

  lift(operator) {
    const store = new Store(this._reducer, this, this._dispatcher);
    store.operator = operator;
    return store;
  }

  replaceReducer(reducer) {
    this._reducer.next(reducer);
  }

  next(action) {
    this._dispatcher.next(action);
  }

  error(err) {
    this._dispatcher.error(err);
  }

  complete() {
    // noop
  }
}

export function createStore(_reducer, _initialState, enhancer) {
  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error('Expected the enhancer to be a function.')
    }
    
    return enhancer(createStore)(_reducer, _initialState)
  }

  if (typeof _reducer !== 'function') {
    throw new Error('Expected the reducer to be a function.')
  }
  
  const dispatcher = new Dispatcher();

  let initialState = _initialState;
  let reducer = new Reducer(dispatcher, _reducer);
  if(!(_initialState instanceof State)){
    _initialState = _reducer(undefined, { type: Dispatcher.INIT });
    initialState = new State(_initialState, dispatcher, reducer);
  }
  
  return new Store(reducer, initialState, dispatcher);
}
