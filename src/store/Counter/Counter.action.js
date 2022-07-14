export const COUNTER_INCREMENT = 'COUNTER_INCREMENT';
export const COUNTER_DECREMENT = 'COUNTER_DECREMENT';

/** @namespace CounterApp/Store/Counter/Action/increment */
export const increment = () => ({
    type: COUNTER_INCREMENT,
    counter: 0
});

/** @namespace CounterApp/Store/Counter/Action/decrement */
export const decrement = () => ({
    type: COUNTER_DECREMENT,
    counter: 0
});
