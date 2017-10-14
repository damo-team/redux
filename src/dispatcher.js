import { BehaviorSubject } from 'rxjs/BehaviorSubject';

export class Dispatcher extends BehaviorSubject {
  static INIT = '@@redux/INIT';

  constructor() {
    super({ type: Dispatcher.INIT });
  }

  dispatch(action){
    this.next(action);
  }

  complete() {
    // noop
  }
}
