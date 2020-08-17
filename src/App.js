import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

import Header from './components/Header.js/index'
import Footer from './components/Footer.js/index'
import AboutMe from './components/AboutMe.js/index'

import Home from './components/Home.js/index'
// import Portfolios from './components/Portfolios.js'


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Home></Home>
      <AboutMe></AboutMe>
      {/* <Portfolios></Portfolios> */}
      
      <Footer></Footer>
    </div>
  );
}

export default App;
