import Board from './Board.js';
import React from 'react';

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null),
      }],
      xIsNext: true,
    };
  }
  handleClick(i){
    const history = this.state.history;
    const current = history[history.length - 1];
    const squares=current.squares.slice();
    if(this.calculateWinner(squares)||squares[i]){
        return;
    }
    squares[i]=this.state.xNext ? 'X': 'O';
    this.setState({
      history: history.concat([{
        squares: squares,
      }]),
      xNext: !this.state.xNext,
    });
  }
  calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    function isFilled(item){
      return item!=null;
    }
    if(squares.every(isFilled)){
      return 'Draw'
    }
    
    return null;
  }
    render() {
      const history = this.state.history;
      const current = history[history.length - 1];
      const winner= this.calculateWinner(current.squares);
      let status;
      if ((winner==="X")||(winner==="O")) {
          status='Winner is ' + winner;
      }
      else if(winner==="Draw"){
        status="It's draw"
      }
      else{
          status='Next player: ' + (this.state.xNext ? 'X': 'O');
      }
    
      return (
         
        <div className="game">
          <div className="game-board">
            <Board 
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
             />
          </div>
          <div className="game-info">
            <div>{status}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
        
      );
    }
  }