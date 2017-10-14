import { withLatestFrom } from 'rxjs/operator/withLatestFrom';
import { scan } from 'rxjs/operator/scan';
import { observeOn } from 'rxjs/operator/observeOn';
import { queue } from 'rxjs/scheduler/queue';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Dispatcher } from './dispatcher';
import { Reducer } from './reducer';

export class State extends BehaviorSubject {
  constructor(_initialState, action$, reducer$) {
    super(_initialState);

    const actionInQueue$ = observeOn.call(action$, queue);
    const actionAndReducer$ = withLatestFrom.call(actionInQueue$, reducer$);
    const state$ = scan.call(actionAndReducer$, (state, [ action, reducer ]) => {
      return reducer(state, action);
    }, _initialState);

    state$.subscribe(value => {
      return this.next(value)
    });
  }
}
