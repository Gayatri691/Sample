import React from 'react';
// import './App.css';
import Error from './components/error/error'
import Signup from './components/signup/signup';
import Login from './components/login/login';
import Header from './components/header/header';
import Hello from './components/hello/hello';


function App() {
  return (
    <div className="App">
      {/* <Login></Login>
      <Signup></Signup> */}
      <Error></Error>
      <Header></Header>
      <Hello></Hello>
      
    </div>




  );
}

export default App;
