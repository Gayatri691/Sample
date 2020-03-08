import React from 'react';
// import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Error from './components/error/error'
import Signup from './components/signup/signup';
import Login from './components/login/login';
import Header from './components/header/header';
import Hello from './components/hello/hello';
import Display from './components/display/display';
import Main from './components/main/main';


function App() {
  return (
    <div className="App">
      {/* <Login></Login>
      <Signup></Signup> */}
      <BrowserRouter>
        <Header></Header>
        {/* <Hello></Hello> */}
        {/* <Display></Display> */}
        {/* <Error></Error> */}
        <Main></Main>
      </BrowserRouter>
    </div>




  );
}

export default App;
