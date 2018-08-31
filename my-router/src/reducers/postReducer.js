//What's a Reducer?
// It is a function that takes the current state and an action that was dispatched as it’s parameters and returns the new state.

//Step4: below code snippet 
const postReducer = (state = [], action) => {
  //Step8: 
  switch(action.type) {
    case 'ADD_POST':
      return state.concat([action.data]);
    default:
      return state;
  }
  //Step 8 - clarification - in the above code, action.type = Event and action.data = Form Data from Add Post

  //Step 9: Now that we have some code inside postReducer.js let’s import it in our index.js file and pass it to the store as an argument.

}
export default postReducer;
//step5: We'll fill this later. but, now it is time to understand the concept called 'Actions'
//What are Actions? Actions are plain Javascript objects with a type property. This type property describes the event that is taking place in the application.

//Step6: Go to index.js

