import React from 'react';
import {BrowserRouter as Router, Route,Routes} from "react-router-dom";
import './App.css';
import { Main } from './pages/main/main';
import { Login } from './pages/login';
import { AddPost } from './pages/add-post/add-post';
import { Navbar } from './components/navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/add-post' element={<AddPost/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
