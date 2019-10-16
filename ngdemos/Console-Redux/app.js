// In this demo we will add redux middleware that logs out 
// a message everytime an action is fired so that you can see what 
// effect it had on state.
// This will help you during developement and during troubleshooting when you have
// apps in production

// One last note: You can also roll back apps very cheaply because state is read only
// and all the prevous copies of state are still hanging around. This would be great 
// for an undo function


//pull in an additional function called applyMiddleware from redux
const { createStore,applyMiddleware  } = require('redux');

// Define a logger function and make it take a parameter called store
// This function should return another function that has a parameter called next
// And this function should return yet another function that has an action parameter
const logger = store => next => action => {
  console.log('dispatching', action)
  // get the result of the action by calling next
  let result = next(action)
  console.log('state after action', store.getState())
  return result
}


const defaultState = {
  courses: [
    {
      name: 'Learning Angular',
      topic: 'Angular',
    },
    {
      name: 'Using Redux without Angular',
      topic: 'Redux',
    }
  ]
};

function reducer(state, action) {
  switch (action.type) {
    case 'ADD_COURSE':
      return Object.assign({}, state, {
        courses: [...state.courses, action.course]
      });
    default:
      return state;
  }
}

// pass in the results of calling the applyMiddleware and passing the logger function
const store = createStore(reducer,defaultState,applyMiddleware(logger));


function addView(viewFunc) {
  viewFunc(defaultState);
  store.subscribe(() => {
    viewFunc(store.getState());
  })

}

addView((state) => {
  console.log(`There are ${state.courses.length} courses in the library`);
});

addView((state) => {
  console.log(`The latest course in the library: ${state.courses[state.courses.length - 1].name}`);
});

store.dispatch({
  type: 'ADD_COURSE',
  course: {
    name: 'This is the new course',
    topic: 'Really does not matter'
  }
});


