import React from 'react';
import cursor from "./img/cursorr.png";

export default class Cursor extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = { top: 0, left: 0 };
    }
  
      // Метод будет вызван сразу после монтирования: создаём эффекты
    componentDidMount() {
      document.addEventListener('mousemove', this.handleMouseMove);
      document.documentElement.classList.add('no-cursor');
    }
  
    handleMouseMove = (event) => {
      this.setState({
        top: event.pageY,
        left: event.pageX,
      });
    };
  
    render() {
      return (
        <img
          src={cursor} alt="cursor"
          width="100"
          style={{
            position: 'absolute',
            top: this.state.top,
            left: this.state.left,
            pointerEvents: 'none',
          }}
        />
      );
    }
  } 
  