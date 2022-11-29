import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './paginas/home/home';
import {Grid} from '@material-ui/core'
import Navbar from './componentes/estaticos/navbar/navbar';
import Footer from './componentes/estaticos/footer/footer';
import Login from './paginas/login/login';



function App() {
  return (
    <>
      <Router>
        <Navbar/> 
        <Routes>
          <Route path='/home' element={<Home/>}> </Route>
              
          <Route path='/login' element={<Login/>}> </Route>    
         
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
