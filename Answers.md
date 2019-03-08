1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

    Functions that do not produce side-effects are called pure functions. These are functions like Map, 

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    Store is what harbors or stores/ links to the reducer, it is what controls all the components, you're component will not do much and most, if not all actions will not work without the "truth"/ cases of the reducer. Actions interact with reducers. If I am trying to store an action.payload in my state, but my reducer doesn't recognize anything called payload it will stop your action and error out. 


1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

    Application state is a global state that any component in redux can use. Component state can only be passed via props or used in that component.
    
1.  What is middleware?

    The middle man shoved between and that links 2 components. It can be used to do may things, like log the components actions, or even execute programs.


1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

    Thunk intercepts an action and waits to send it as a dispatch when it is needed. it lets you control when to use an action.
    

1.  Which `react-redux` method links up our `components` with our `redux store`?

    Connect() , it links up state to store.
