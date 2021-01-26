import React from 'react';
function Square(props) {
    return (
      <button className="square" onClick={props.onClick}>
        {props.value}
      </button>
    );
  }

export default class Board extends React.Component {

 
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
     
    renderSquare(i) {
      return <Square
       value={this.props.squares[i]}
       onClick={()=>this.props.onClick(i)}
       />;
    }
    
    
  
    render() {
      
      
      return (
        <div className="board">
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
    
    
    
  }