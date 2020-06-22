import React, {Component} from 'react';
import Square from './Square';
import Diamond from './Diamond';

class Board extends Component {
  
    renderSquare(i) {
      return (
        <Square 
          value={this.props.squares[i]}
          onClick={() => this.props.onClick(i)}
        />);
    }
  
  
    renderDiamond(i) {
      return (
        <Diamond
          value={this.props.squares[i]}
          onClick={() => this.props.onClick(i)}
        />);
    }
  
    render() {
      const size = this.props.size;
      const dim = this.props.dimention;
      if (dim === 2) {
        return (
            <div className="game-board">
                {
                    [...Array(size)].map( (_, i) => (
                          <div key={i} className="board-row">
                              {
                                  [...Array(size)].map( (_, j) => this.renderSquare(size*i+j))
                              }
                          </div>
                    ))
                }
            </div>
        );
      } else {
          return (
            <div className="game-board">
                {
                    [...Array(size)].map( (_, i) => (
                            <div>
                                {
                                    [...Array(size)].map( (_, j) => (
                                        <div className="board-row" style={{ marginLeft: 2.4*(size-1-j)+'vw'}}>
                                            {
                                                [...Array(size)].map( (_, k) => this.renderDiamond(size*size*i+size*j+k))
                                            }
                                        </div>
                                    ))
                                }
                            <br></br>
                            </div>
                    ))
                }
            </div>
          );
      }
    }
}

export default Board;