## Getting started with redux by Dan Abramov
### `Principles:`
1. Everything that changes in your application data or UI state is contained in a single object called **the state** or **the state tree**.
2. The state tree is read-only.
3. To describe state mutations, you have to write a function that takes the previous state of the app, the action being dispatched, and returns the next state of the app. This function has to be pure. This function is called **the Reducer**
### `What you should know:`
1. Any change to state must be done via dispatching an action.
2. An action plain javascript object describing the change.
3. The structure of an action object must include **type** key which has to be defined. 
4. an Action is a pure function [Read this](https://www.freecodecamp.org/news/what-is-a-pure-function-in-javascript-acb887375dfe/).
5. An UI is predictable, when it's declared as pure function of the application state.
6. If the state is undefined, the reducer should return the initial state (Convention).
