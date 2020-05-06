import React from 'react';
import ReactDOM from 'react-dom';
// import { CheckBox } from 'react-native-elements'
import './index.css';

// class Square extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       value: null,
//     };
//   }
//   render() {
//     return (
//       <button 
//         className="square" 
//         onClick={() => this.props.onClick()}
//       >
//         {this.props.value}
//       </button>
//     );
//   }
// }

// return (
//   <li key={move}>
//     <button onClick={() => this.jumpTo(move)}>{desc}</button>
//   </li>
// );

function Square(props) {
  return (
    <button 
      className="square"
      onClick={props.onClick}>
        {props.value}
    </button>
  );
}

function Diamond(props) {
  return (
    <button
      className="parallelogram"
      onClick={props.onClick}>
        {props.value}
      </button>
  )
}

class Board extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     squares: Array(9).fill(null),
  //     xIsNext: true,
  //   };
  // }

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

  // handleClick(i) {
  //   const squares = this.state.squares.slice();
  //   if (calculateWinner(squares) || squares[i]) {
  //     return;
  //   }
  //   squares[i] = this.state.xIsNext ? 'X': 'O';
  //   this.setState({
  //     squares: squares, 
  //     xIsNext: !this.state.xIsNext,
  //   });
  // }

  render() {
    // const winner = calculateWinner(this.state.squares);
    // let status;
    // if (winner) {
    //   status = 'Winner: ' + winner;
    // } else {
    //   status = 'Next player: ' + (this.state.xIsNext ? 'X': 'O');
    // }
    const size = this.props.size;
    const dim = this.props.dimention;
    if (size == 4) {
      if (dim == 2) {
        return (
          <div>
            {/* <div className="status">{status}</div> */}
            <div className="board-row">
              {this.renderSquare(0)}
              {this.renderSquare(1)}
              {this.renderSquare(2)}
              {this.renderSquare(3)}
            </div>
            <div className="board-row">
              {this.renderSquare(4)}
              {this.renderSquare(5)}
              {this.renderSquare(6)}
              {this.renderSquare(7)}
            </div>
            <div className="board-row">
              {this.renderSquare(8)}
              {this.renderSquare(9)}
              {this.renderSquare(10)}
              {this.renderSquare(11)}
            </div>
            <div className="board-row">
              {this.renderSquare(12)}
              {this.renderSquare(13)}
              {this.renderSquare(14)}
              {this.renderSquare(15)}
            </div>
          </div>
        );
      } else {
        return (
          <div>
            <div>
              {/* <div className="status">{status}</div> */}
              <div className="board-row" style={{ marginLeft: '7.2vw' }}>
                {this.renderDiamond(0)}
                {this.renderDiamond(1)}
                {this.renderDiamond(2)}
                {this.renderDiamond(3)}
              </div>
              <div className="board-row" style={{ marginLeft: '4.8vw' }}>
                {this.renderDiamond(4)}
                {this.renderDiamond(5)}
                {this.renderDiamond(6)}
                {this.renderDiamond(7)}
              </div>
              <div className="board-row" style={{ marginLeft: '2.4vw' }}>
                {this.renderDiamond(8)}
                {this.renderDiamond(9)}
                {this.renderDiamond(10)}
                {this.renderDiamond(11)}
              </div>
              <div className="board-row" style={{ marginLeft: '0vw' }}>
                {this.renderDiamond(12)}
                {this.renderDiamond(13)}
                {this.renderDiamond(14)}
                {this.renderDiamond(15)}
              </div>
            </div>
            <br></br>
            <div>
              {/* <div className="status">{status}</div> */}
              <div className="board-row" style={{ marginLeft: '7.2vw' }}>
                {this.renderDiamond(16)}
                {this.renderDiamond(17)}
                {this.renderDiamond(18)}
                {this.renderDiamond(19)}
              </div>
              <div className="board-row" style={{ marginLeft: '4.8vw' }}>
                {this.renderDiamond(20)}
                {this.renderDiamond(21)}
                {this.renderDiamond(22)}
                {this.renderDiamond(23)}
              </div>
              <div className="board-row" style={{ marginLeft: '2.4vw' }}>
                {this.renderDiamond(24)}
                {this.renderDiamond(25)}
                {this.renderDiamond(26)}
                {this.renderDiamond(27)}
              </div>
              <div className="board-row" style={{ marginLeft: '0vw' }}>
                {this.renderDiamond(28)}
                {this.renderDiamond(29)}
                {this.renderDiamond('0vw')}
                {this.renderDiamond(31)}
              </div>
            </div>
            <br></br>
            <div>
              {/* <div className="status">{status}</div> */}
              <div className="board-row" style={{ marginLeft: '7.2vw' }}>
                {this.renderDiamond(32)}
                {this.renderDiamond(33)}
                {this.renderDiamond(34)}
                {this.renderDiamond(35)}
              </div>
              <div className="board-row" style={{ marginLeft: '4.8vw' }}>
                {this.renderDiamond(36)}
                {this.renderDiamond(37)}
                {this.renderDiamond(38)}
                {this.renderDiamond(39)}
              </div>
              <div className="board-row" style={{ marginLeft: '2.4vw' }}>
                {this.renderDiamond(40)}
                {this.renderDiamond(41)}
                {this.renderDiamond(42)}
                {this.renderDiamond(43)}
              </div>
              <div className="board-row" style={{ marginLeft: '0vw' }}>
                {this.renderDiamond(44)}
                {this.renderDiamond(45)}
                {this.renderDiamond(46)}
                {this.renderDiamond(47)}
              </div>
            </div>
            <br></br>
            <div>
              {/* <div className="status">{status}</div> */}
              <div className="board-row" style={{ marginLeft: '7.2vw' }}>
                {this.renderDiamond(48)}
                {this.renderDiamond(49)}
                {this.renderDiamond(50)}
                {this.renderDiamond(51)}
              </div>
              <div className="board-row" style={{ marginLeft: '4.8vw' }}>
                {this.renderDiamond(52)}
                {this.renderDiamond(53)}
                {this.renderDiamond(54)}
                {this.renderDiamond(55)}
              </div>
              <div className="board-row" style={{ marginLeft: '2.4vw' }}>
                {this.renderDiamond(56)}
                {this.renderDiamond(57)}
                {this.renderDiamond(58)}
                {this.renderDiamond(59)}
              </div>
              <div className="board-row" style={{ marginLeft: '0vw' }}>
                {this.renderDiamond('2.4vw')}
                {this.renderDiamond(61)}
                {this.renderDiamond(62)}
                {this.renderDiamond(63)}
              </div>
            </div>
          </div>
        );
      }
      
    } else {
      if (dim == 2) {
        return (
          <div>
            {/* <div className="status">{status}</div> */}
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
      } else {
        return (
          <div>
            <div>
              {/* <div className="status">{status}</div> */}
              <div className="board-row" style={{ marginLeft: '4.8vw' }}>
                {this.renderDiamond(0)}
                {this.renderDiamond(1)}
                {this.renderDiamond(2)}
              </div>
              <div className="board-row" style={{ marginLeft: '2.4vw' }}>
                {this.renderDiamond(3)}
                {this.renderDiamond(4)}
                {this.renderDiamond(5)}
              </div>
              <div className="board-row" style={{ marginLeft: '0vw' }}>
                {this.renderDiamond(6)}
                {this.renderDiamond(7)}
                {this.renderDiamond(8)}
              </div>
            </div>
            <br></br>
            <div>
              {/* <div className="status">{status}</div> */}
              <div className="board-row" style={{ marginLeft: '4.8vw' }}>
                {this.renderDiamond(9)}
                {this.renderDiamond(10)}
                {this.renderDiamond(11)}
              </div>
              <div className="board-row" style={{ marginLeft: '2.4vw' }}>
                {this.renderDiamond(12)}
                {this.renderDiamond(13)}
                {this.renderDiamond(14)}
              </div>
              <div className="board-row" style={{ marginLeft: '0vw' }}>
                {this.renderDiamond(15)}
                {this.renderDiamond(16)}
                {this.renderDiamond(17)}
              </div>
            </div>
            <br></br>
            <div>
              {/* <div className="status">{status}</div> */}
              <div className="board-row" style={{ marginLeft: '4.8vw' }}>
                {this.renderDiamond(18)}
                {this.renderDiamond(19)}
                {this.renderDiamond(20)}
              </div>
              <div className="board-row" style={{ marginLeft: '2.4vw' }}>
                {this.renderDiamond(21)}
                {this.renderDiamond(22)}
                {this.renderDiamond(23)}
              </div>
              <div className="board-row" style={{ marginLeft: '0vw' }}>
                {this.renderDiamond(24)}
                {this.renderDiamond(25)}
                {this.renderDiamond(26)}
              </div>
            </div>
          </div>
        );
      } 
    }
  }
}

function calculateWinner(squares) {
  const size = squares.length;
  let lines;
  if (size == 16 || size == 64) {
    if (size == 16) {
      lines = [
        [0, 1, 2, 3],
        [4, 5, 6, 7],
        [8, 9, 10, 11],
        [12, 13, 14, 15],
        [0, 4, 8, 12],
        [1, 5, 9, 13],
        [2, 6, 10, 14],
        [3, 7, 11, 15],
        [0, 5, 10, 15],
        [3, 6, 9, 12],
      ];
    } else {
      lines = [
        // 16 rows
        [0, 1, 2, 3],
        [4, 5, 6, 7],
        [8, 9, 10, 11],
        [12, 13, 14, 15],

        [16, 17, 18, 19],
        [20, 21, 22, 23],
        [24, 25, 26, 27],
        [28, 29, 30, 31],

        [32, 33, 34, 35],
        [36, 37, 38, 39],
        [40, 41, 42, 43],
        [44, 45, 46, 47],

        [48, 49, 50, 51],
        [52, 53, 54, 55],
        [56, 57, 58, 59],
        [60, 61, 62, 63],
        // 16 cols
        [0, 4, 8, 12],
        [1, 5, 9, 13],
        [2, 6, 10, 14],
        [3, 7, 11, 15],
        [16, 20, 24, 28],
        [17, 21, 25, 29],
        [18, 22, 26, 30],
        [19, 23, 27, 31],
        [32, 36, 40, 44],
        [33, 37, 41, 45],
        [34, 38, 42, 46],
        [35, 39, 43, 47],
        [48, 52, 56, 60],
        [49, 53, 57, 61],
        [50, 54, 58, 62],
        [51, 55, 59, 63],
        // 16 heights
        [0, 16, 32, 48],
        [1, 17, 33, 49],
        [2, 18, 34, 50],
        [3, 19, 35, 51],
        [4, 20, 36, 52],
        [5, 21, 37, 53],
        [6, 22, 38, 54],
        [7, 23, 39, 55],
        [8, 24, 40, 56],
        [9, 25, 41, 57],
        [10, 26, 42, 58],
        [11, 27, 43, 59],
        [12, 28, 44, 60],
        [13, 29, 45, 61],
        [14, 30, 46, 62],
        [15, 31, 47, 63],
        // 8 diag in plane
        [0, 5, 10, 15],
        [3, 6, 9, 12],
        [16, 21, 26, 31],
        [19, 22, 25, 28],
        [32, 37, 42, 47],
        [35, 38, 41, 44],
        [48, 53, 58, 63],
        [51, 54, 57, 60],
        // 8 diag in different planes with same row
        [0, 17, 34, 51],
        [3, 18, 33, 48],
        [4, 21, 38, 55],
        [7, 22, 37, 52],
        [8, 25, 42, 59],
        [11, 26, 41, 55],
        [12, 29, 46, 63],
        [15, 30, 45, 60],
        // 8 diag in different planes with same col
        [0, 20, 40, 60],
        [12, 24, 36, 48],
        [1, 21, 41, 61],
        [13, 25, 37, 49],
        [2, 22, 42, 62],
        [14, 26, 38, 50],
        [3, 23, 43, 63],
        [15, 27, 39, 51],
        // 4 diag in different planes with different rows and cols
        [0, 21, 42, 63],
        [15, 26, 37, 48],
        [3, 22, 41, 60],
        [12, 25, 38, 51],
        
      ];
    }
    
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c, d] = lines[i];
      if (squares[a] && squares[a] == squares[b] && squares[a] == squares[c] && squares[a] == squares[d]) {
        return squares[a];
      }
    }
    return null;

  } else {
    if (size == 9) {
      lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];
    } else {
      lines = [
        // 9 rows
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],

        [9, 10, 11],
        [12, 13, 14],
        [15, 16, 17],
        
        [18, 19, 20],
        [21, 22, 23],
        [24, 25, 26],

        // 9 cols
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [9, 12, 15],
        [10, 13, 16],
        [11, 14, 17],
        [18, 21, 24],
        [19, 22, 25],
        [20, 23, 26],

        // 9 heights
        [0, 9, 18],
        [1, 10, 19],
        [2, 11, 20],
        [3, 12, 21],
        [4, 13, 22],
        [5, 14, 23],
        [6, 15, 24],
        [7, 16, 25],
        [8, 17, 26],

        // 6 diag in same planes
        [0, 4, 8],
        [2, 4, 6],
        [9, 13, 17],
        [11, 13, 15],
        [18, 22, 26],
        [20, 22, 24],

        // 6 diag in diff planes with same rows
        [0, 10, 20],
        [2, 10, 18],
        [3, 13, 23],
        [5, 13, 21],
        [6, 16, 26],
        [8, 16, 24],

        // 6 diag in diff planes with same cols
        [0, 12, 24],
        [6, 12, 18],
        [1, 13, 25],
        [7, 13, 19],
        [2, 14, 26],
        [8, 14, 20],

        // 4 diag in diff planes with diff rows and cols
        [0, 13, 26],
        [8, 13, 18],
        [2, 13, 24],
        [6, 13, 20],
        
      ];
    }
    
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] == squares[b] && squares[a] == squares[c]) {
        return squares[a];
      }
    }
    return null;
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      size: 3,
      dimention: 2,
      history: [{
        squares: Array(9).fill(null),
      }],
      stepNumber: 0,
      xIsNext: true,
    };
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X': 'O';
    this.setState({
      history: history.concat([{
        squares: squares,
      }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    })
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) == 0,
    });
  }

  changeSize(size) {
    const power = this.state.dimention;
    this.setState({
      size: size,
      history: [{
        squares: Array(Math.pow(size, power)).fill(null),
      }],
      stepNumber: 0,
      xIsNext: true,
    });
  }

  changeDimention(dim) {
    const size = this.state.size;
    this.setState({
      dimention: dim,
      history: [{
        squares: Array(Math.pow(size, dim)).fill(null),
      }],
      stepNumber: 0,
      xIsNext: true,
    })
  }

  render() {
    const currentSize = this.state.size;
    const currentDim = this.state.dimention;
    const history = this.state.history;
    // const current = history[history.length - 1];
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const desc = move ?
        'Go to move #' + move :
        'Go to game start';
        return (
          <li key={move}>
            <button onClick={() => this.jumpTo(move)}>{desc}</button>
          </li>
        );
    });

    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X': 'O');
    }
    return (
      <div className="game-info">
        <li>
          <button onClick={() => this.changeSize(3)}>3 X 3</button>
          <button onClick={() => this.changeSize(4)}>4 X 4</button>
        </li>
        <li>
          <button onClick={() => this.changeDimention(2)}>2D</button>
          <button onClick={() => this.changeDimention(3)}>3D</button>
        </li>
        <br></br>
        <div className="game-info">
            <div>{status}</div>
            {/* <ol>{moves}</ol> */}
          </div>
        <br></br>
        <div className="game">
          <div className="game-board">
            <Board 
              size = {currentSize}
              dimention = {currentDim}
              squares = {current.squares}
              onClick = {(i) => this.handleClick(i)}
            />
          </div>
        </div>
      </div>
    );
  }
}

// class GameSetting extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isPlayerVsPlayer: true,
//       isTwoDimentional: true,
//       isSizeThree: true,      
//     }
//   }

//   handleClick() {
//     // TODO;
//   }

//   render() {
    
//     return (
//       <div className="game-setting">
//         <div>
//           <CheckBox
//             // onClick = {() => this.handleClick()}
//             title = 'PvP'
//           />
//         </div>
//         <div>
//           <CheckBox
//             // onClick = {() => this.handleClick()}
//             title = '2D'
//           />
//         </div>
//         <div>
//           <CheckBox
//             // onClick = {() => this.handleClick()}
//             title = 'Size: 3'
//           />
//         </div>
//       </div>
//     );
//   }
// }

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
