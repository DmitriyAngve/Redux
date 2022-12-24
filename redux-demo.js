const redux = require("redux"); // syntax for import redux package

const counterReducer = (state = { counter: 0 }, action) => {
  return {
    counter: state.counter + 1,
  };
};

const createStore = redux.legacy_createStore(counterReducer); // That's a method exposed by Redux library, which does what the name implies, it create a store

const counterSubscriber = () => {
  const latestState = createStore.getState();
  console.log(latestState);
  //   const latestState = createStore.getState();
};

createStore.subscribe(counterSubscriber);

// const redux = require("redux");
// const counterReducer = (state = { counter: 0 }, action) => {
//   return {
//     counter: state.counter + 1,
//   };
// };
// const createStore = redux.legacy_createStore(counterReducer);
// //console.log(createStore.getState());
// const counterSubscriber = () => {
//   const latestState = createStore.getState();
//   console.log(latestState);
// };
// createStore.subscribe(counterSubscriber);
// createStore.dispatch({ type: "increment" });

// ~~ CORE REDUX CONCEPTS ~~
// STEP: 1
// 1.1 "const store = redux.legacy_createStore()" This is how to create Reducer Function. The Reducer Function has to go of spitting out a new state snapshot whenever an action reaches it. When we run this code for the first time, the Reducer will also be executed with a default action, that should spit out the initial state.
// 1.2 Add is a Reducer Function: "const counterReducer = () => {}".
// It's a standart JavaScript Function, but it will be called by the Redux Library and it will then always receive two pieces of inputs (two parameters), the old or existing state and the action that was dispatched. And then this Reducer Function must return a certain output. it must certain return a new state object. Reducer Function should be a pure function, which basically means that the same inputs the same values for inputs always should produce the same output and there should be no side effects inside of that function\
// 1.3 This Reducer Function will receive the state, the current state and the action (by default) because the Reducer will ultimately be executed by the Redux Library. And then we should return the new state, which will replace the existing state.
// 1.4 Often returns object, but theoretically, it can be any kind of value type. In this case we wanna return a nex object with custom fields. "const counterReducer = (state, action) => {return {      counter: state.counter + 1,};};".
// 1.5 Now user would always return an object with a "counter" set to "state.counter + 1". Referring to the existing state (from parameters), which we got automatically accessing the old counter value, which was stored in a state and adding one to it for the new counter value of the newly returned state
// 1.6 Now it's this "counterReducer", which we passed to the "createStore" function. Because the store needs to know which reducer is responsible for changing that store.
// Now we also need someone who subscribes to that store, and then we need an action that can be dispatched.
// STEP: 2
// Let's start with the subscription.
// 2.1 For this I'll a new constant "counterSubscriber" which holds a function which does not get any parameters, but where we then inside of the function can reach out to the store and call: "store.getState()". "getState" - is a method which is avaiable on the store created with create store. And it will give us the latest state snapshot after it was updated.
// Then when it is triggered, we can get latest state after it was changed with the get state method here.
// 2.2 Store that into variable: "const latestState = store.getState()"
// Now we just need to make Redux aware of the "counterSubscriber" function and tell it that disfunction should be executed whenever our state changes.
// 2.3 Do that by reaching out to the store and calling the "subscribe" method on the store: "store.subscribe()".
// The "subscribe" method then wants such a subscriber function, so the subscribe method expets a function which Redux will then execute for us whenever the data and the store changed.
// 2.4 Now pass the counter subscriber to subscribe: "store.subscribe(counterSubscriber)". Important, we  don't execute "counterSubscriber" we just poin at it.
// Both the counterSubscriber and counterReducer will be executed by Redux.
// STEP: 3
// When we run (node redux-demo.js) we'll see error, because we have no existing state because it's the first time this is executing. That's why we sould give state the state parameter a default value, which is assumed if it would otherwise be undefined: "const counterReducer = (state = { counter: 0 }, action)"
// ~~ CORE REDUX CONCEPTS ~~
