import React from 'react';
import Login from './paginas/login/login';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import SobreNos from './paginas/sobreNos/sobreNos';
import './App.css';
import Navbar from './components/estaticos/navbar/Navbar';
import Home from './paginas/home/Home';
import Footer from './components/estaticos/footer/footer';
import Cadastro from './paginas/cadastro/cadastro';


function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/home' element={<Home/>} />
          <Route path='/login' element={<Login/>}/>
          <Route path='/sobre-nos' element={<SobreNos/>}/>
          <Route path='/cadastro' element={<Cadastro/>}/>
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App;
