import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Dispatcher, Action } from './dispatcher';


export class Reducer extends BehaviorSubject{
  static REPLACE = '@rx/store/replace-reducer';

  constructor(_dispatcher, initialReducer) {
    super(initialReducer);
    this._dispatcher = _dispatcher;
  }

  replaceReducer(reducer) {
    this.next(reducer);
  }

  next(reducer) {
    super.next(reducer);
    this._dispatcher.dispatch({ type: Reducer.REPLACE });
  }
}
