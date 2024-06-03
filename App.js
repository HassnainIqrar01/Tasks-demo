// import React, { Component } from 'react';
// import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <h1>Hello World!!!</h1>
//       </div>
//     );
//   }
// }

// export default App;




///////--------------Functional component to inc or dec---------------------


// import React, { useState } from 'react';

// const FunctionalCounter = () => {
//   const [count, setCount] = useState(0);

//   const increment = () => {
//     setCount(count + 1);
//   };

//   const decrement = () => {
//     setCount(count - 1);
//   };

//   return (
//     <div>
//       <h2>Functional Counter</h2>
//       <p>Count: {count}</p>
//       <button onClick={increment}>Increment</button>
//       <button onClick={decrement}>Decrement</button>
//     </div>
//   );
// };

// export default FunctionalCounter;



///---------------------class base component for Inc or Dec-------------------------


// import React, { Component } from 'react';

// const numbers = [1, 2, 3, 4, 5];
// const doubled = numbers.map((number) => number * 2);
// console.log(doubled);

// class ClassCounter extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0
//     };
//   }
//   increment = () => {
//     this.setState({ count: this.state.count + 1 });
//     console.log("Hello")
//   };
//   decrement = () => {
//     this.setState({ count: this.state.count - 1 });
//   };
//   render() {
//     return (
//       <div>
//         <form>
//   <label>
//     Name:
//     <input type="text" name="name" />
//   </label>
//   <input type="submit" onSubmit={console.log("hello There !")} value="Submit" />
// </form>
//         <h2>Class Counter</h2>
//         <p>Count: {this.state.count}</p>
//         <button onClick={this.increment}>Increment</button>
//         <button onClick={this.decrement}>Decrement</button>
//       </div>
//     );
//   }
// }

// export default ClassCounter;




///------------------Component Life Cycle in React-----------------------




// import React, { Component } from 'react';

// class LifecycleExample extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       message: ''
//     };
//     console.log('Constructor');
//   }

//   componentDidMount() {
//     console.log('Component did mount');
//     this.setState({ message: 'Component is mounted' });
//   }

//   componentDidUpdate(prevProps, prevState) {
//     console.log('Component did update');
    
//   }

//   componentWillUnmount() {
//     console.log('Component will unmount');
//   }

//   render() {
//     console.log('Render');
//     return (
//       <div>
//         <h2>Component Lifecycle in React </h2>
//         <p>{this.state.message}</p>
//       </div>
//     );
//   }
// }

// export default LifecycleExample;




///---------------Grand Code Example (Class) -------------------



// import React, { Component } from 'react';
// const Message = ({ isLoggedIn }) => {
//   return isLoggedIn ? <p>Welcome, User!</p> : <p>Please log in.</p>;
// };


// const TodoList = ({ todos }) => {
//   return (
//     <ul>
//       {todos.map(todo => (
//         <li key={todo.id}>{todo.text}</li>
//       ))}
//     </ul>
//   );
// };


// class TodoApp extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isLoggedIn: false,
//       todos: [
//         { id: 1, text: 'Learn React' },
//         { id: 2, text: 'Build a Todo App' },
//         { id: 3, text: 'Master JSX' }
//       ]
//     };
//   }


//   handleLogin = () => {
//     this.setState({ isLoggedIn: true });
//   };

//   render() {
//     const { isLoggedIn, todos } = this.state;
//     return (
//       <div>
//         <h1>Todo App</h1>
//         <Message isLoggedIn={isLoggedIn} />
//         <button onClick={this.handleLogin}>
//           {isLoggedIn ? 'Logout' : 'Login'}
//         </button>
//         <h2>My Todos</h2>
//         <TodoList todos={todos} />
//       </div>
//     );
//   }
// }

// export default TodoApp;



//------------------------Grand Code (Function)--------------------------




// import React, { useState } from 'react';

// const Message = ({ isLoggedIn }) => {
//   return isLoggedIn ? <p>Welcome, Hassnain!</p> : <p>Please log in.</p>;
// };

// const AppList = ({ todos }) => {
//   return (
//     <ul>
//       {todos.map(todo => (
//         <li key={todo.id}>{todo.text}</li>
//       ))}
//     </ul>
//   );
// };


// const MyApp = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [todos] = useState([
//     { id: 1, text: 'Hello' },
//     { id: 2, text: 'This is me!' },
//     { id: 3, text: 'Good Bye!' }
//   ]);

  
//   const handleLogin = () => {
//     setIsLoggedIn(prevState => !prevState);
//   };

//   return (
//     <div>
//       <h1>Todo App</h1>
//       <Message isLoggedIn={isLoggedIn} />
//       <button onClick={handleLogin}>
//         {isLoggedIn ? 'Logout' : 'Login'}
//       </button>
//       <h2>Todos</h2>
//       <AppList todos={todos} />
//     </div>
//   );
// };

// export default MyApp;





//---Hooks in React---



//-------------Use State--------------------


// import React, { useState } from 'react';

// function Counter() {
//    const [count, setCount] = useState(0);

//   return (
//     <div>
//       <p>You clicked {count} times</p>
//        <button onClick={() => setCount(count + 1)}>
//         Click this Button!
//        </button>
//     </div>
//   );
// }
// export default Counter;



// -------------------Use Call backs--------------------



// import React, { useState, useCallback } from 'react';

// function Counter() {
//   const [count, setCount] = useState(0);

//   const handleClick = useCallback(() =>  {
//       setCount(count + 1);
//   }, [count]);

//   return (
//     <div>
//       <p>Count: {count}</p>
//        <button onClick={handleClick}>Increment</button>
//     </div>
//   );
// }

// export default Counter


