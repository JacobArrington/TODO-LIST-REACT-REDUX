# TODO-LIST-REACT-REDUX

The goal of this project is to create a simple to-do list app using React and Redux. The app should allow users to:

Add new tasks to the list
Mark tasks as completed
Remove tasks from the list
Filter tasks based on their completion status
Prerequisites
Node.js installed on your local machine
Basic knowledge of React and Redux
Getting Started
Install dependencies by running npm install in the root directory of the project.

Create a new React project using create-react-app by running npx create-react-app my-app in your terminal.

Create a TodoList component that displays a list of tasks. The tasks should be stored in a Redux store and passed to the component as props.

Create an AddTodo component that allows users to add new tasks to the list. The component should include a text input and a button. When the button is clicked, the component should dispatch an action to add the new task to the Redux store.

Create a TodoItem component that displays a single task in the list. The component should include a checkbox to mark the task as completed and a button to remove the task from the list. When the checkbox is checked or the button is clicked, the component should dispatch an action to update the task in the Redux store.

Create a FilterTodos component that allows users to filter the list of tasks based on their completion status. The component should include two buttons: one to show completed tasks and one to show incomplete tasks. When a button is clicked, the component should dispatch an action to update the filter in the Redux store.

Create a redux directory in your project and create a store.js file inside it. Set up a Redux store with the following actions and reducers:

ADD_TODO: Adds a new task to the list.
TOGGLE_TODO: Toggles the completion status of a task.
REMOVE_TODO: Removes a task from the list.
SET_FILTER: Sets the current filter for the list.
In your index.js file, wrap your TodoList component with a Provider component and pass in the Redux store as a prop.


Test your app by adding some tasks to the list, marking some as completed, and filtering the list based on completion status.

Once you have the basic app working, you can add additional features and functionality, such as:

Persistence: Store the tasks in local storage or a database so that they persist across page reloads.
Edit mode: Allow users to edit existing tasks in the list.
Drag and drop: Allow users to drag and drop tasks to reorder them.
Theming: Allow users to switch between different themes or color schemes for the app.
