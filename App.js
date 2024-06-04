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

// export default Counter;




//----------------useRef-----------------




// import React, { useRef } from 'react';

// function Input() {
//   const inputRef = useRef(null);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const message = inputRef.current.value;
//     console.log("The Message is:", message);
//     inputRef.current.value = "";
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input ref={inputRef} type="text" placeholder="Input anything.." />
//       <button type="submit">Send</button>
//     </form>
//   );
// }

// export default Input;




//-------------useReducer-----------------


// import React,{useReducer} from 'react';

// const initialState = { count: 0 };

// function reducer(state, action) {
//   switch (action.type) {
//     case 'increment':
//       return { count: state.count + 1 };
//     case 'decrement':
//       return { count: state.count - 1 };
//     default:
//       throw new Error();
//   }
// }
// function Counter() {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   return (
//     <div>
//       <p>Count: {state.count}</p>
//       <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
//       <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
//     </div>
//   );
// }
// export default Counter;


//----------useImperativeHandle-----------------

//Modal.js is linked with this code as its exposing the data in parent component.

import React, { useRef } from 'react';
import Modal from './Modal';

function App() {
 
  const modalRef = useRef();

  const handleOpenModal = () => {
    
    modalRef.current.open();
    console.log("Modal is now Opened!");
  };

  const handleCloseModal = () => {
    
    modalRef.current.close();
    console.log("Modal is now Closed!");
  };

  const handleSetModalContent = () => {
    modalRef.current.setContent('<h2>This is dynamic content!</h2>');
    console.log("fetching data!");
  };

  return (
    <div>
      <h1>App</h1>
      <button onClick={handleOpenModal}>Open Modal</button>
      <button onClick={handleCloseModal}>Close Modal</button>
      <button onClick={handleSetModalContent}>Set Modal Content</button>

   
      <Modal ref={modalRef} />
    </div>
  );
}

export default App;



//----------useMemo-----------

// import React, { useState, useMemo } from "react";

// const Counter = () => {
//   const [myNum, setMyNum] = useState(0);
//   const [show, setShow] = useState(false);

//   const getValue = () => {
//     return setMyNum(myNum + 1);
//   };

//   const countNumber = (num) => {
//     console.log("Number count is equal to: ", num);
//     for (let i = 0; i <= 1000000000; i++) {}
//     return num;
//   };

//   const checkData = useMemo(() => {
//     return countNumber(myNum);
//   }, [myNum]);

//   return (
  
//     <div>
//       <button onClick={getValue}>
//         Counter
//       </button>
//       <p> My new number : {checkData} </p>
//       <button onClick={() => setShow(!show)}>
//         {show ? "You clicked me!!!!" : "Click here !"}
//       </button>
//       </div>
//   );
// };

// export default Counter;
