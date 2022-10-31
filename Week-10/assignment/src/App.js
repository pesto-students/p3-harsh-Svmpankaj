import './App.css';
import Navbar from './components/Navbar';
import Body from './components/Body';
import Footer from './components/Footer';
// import { useState } from 'react'
function App() {

  return (
    <>
    <Navbar/>
    <div className="container">

    <Body/>
    </div>
    <Footer/>
    </>
  );
}

export default App;