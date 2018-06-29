import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Game from './components/Array';
import Footer from "./components/Footer";
import Jumbotron from "./components/Jumbotron";



var newCard = [];


  const Panel = () => (
  <div className="card">
  <Navbar/>
  <hr/>
  <Game/>
  <div className="card-header">
  
  </div>
  <div className="card-body">
    <p className="card-text">
 {newCard}
    </p>
  </div>
</div>
);
// didMount()
// shuffle function


export default Panel;
