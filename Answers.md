1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

    .map() 
    .filter()
    .reduce()

    .assign() 

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    Actions
    - Plain javascript objects that serve as the only source of information.

    Reducers
    - Define how the state changes given the actions.

    Store
    - Brings everything together and keeps track of the apps state.

    It revolves arouind a unidirectional data flow. All of the data follows the same lifecycle pattern and makes everything easier to understand and more predictable. 

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

    - Application state is global and Component state is local.
    - Any component can access the data in application state which can is bad for security so you would want to use component state to "hide" things.

1.  What is middleware?

    Middleware lets us extend and perform actions and add steps between action and reducers.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

    Lets us make action creators that return a function instead of an action. The thunk provides benefit in the form of async processes whena function is returned from a function.

1.  Which `react-redux` method links up our `components` with our `redux store`?

    connect
