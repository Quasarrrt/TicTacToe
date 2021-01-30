import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Game from './Game.js';
import Cursor from './Cursor.js'




  // ========================================
  
  ReactDOM.render(
    <div className="background">

    <Game /><Cursor/></div>,
    document.getElementById('root')
    
  );
  