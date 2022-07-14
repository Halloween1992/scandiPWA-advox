import { COUNTER_DECREMENT, COUNTER_INCREMENT } from './Counter.action';

/** @namespace CounterApp/Store/Counter/Reducer/getInitialState */
export const getInitialState = () => ({
    counter: 0
});

/** @namespace CounterApp/Store/Counter/Reducer/CounterReducer */
export const CounterReducer = (state = getInitialState(), action) => {
    switch (action.type) {
    case COUNTER_INCREMENT:
        return {
            counter: state.counter + 1
        };

    case COUNTER_DECREMENT:
        if (state.counter === 0) {
            return state;
        }

        return {
            counter: state.counter - 1
        };

    default:
        return state;
    }
};

export default CounterReducer;
