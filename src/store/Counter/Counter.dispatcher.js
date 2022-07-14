import { decrement, increment } from 'Store/Counter/Counter.action';

/** @namespace CounterApp/Store/Counter/Dispatcher */
export class CounterDispatcher {
    increaseCounter(counter, dispatch) {
        dispatch(increment(counter));
    }

    decreaseCounter(counter, dispatch) {
        dispatch(decrement(counter));
    }
}

export default new CounterDispatcher();
