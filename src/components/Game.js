import React, {Component} from 'react';
import CalculateWinner from './CalculateWinner';
import Board from './board/Board';


class Game extends Component {
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
        if (CalculateWinner(squares) || squares[i]) {
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
        xIsNext: (step % 2) === 0,
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
        const winner = CalculateWinner(current.squares);

        let status;
        if (winner) {
        status = 'Winner: ' + winner;
        } else {
        status = 'Next player: ' + (this.state.xIsNext ? 'X': 'O');
        }
        return (
        <div className="game-info">
            <li>
            <button onClick={() => this.changeDimention(2)}>2D</button>
            <button onClick={() => this.changeDimention(3)}>3D</button>
            </li>
            <li>
            <button onClick={() => this.changeSize(3)}>3 X 3</button>
            <button onClick={() => this.changeSize(4)}>4 X 4</button>
            </li>
            <br></br>
            <div className="game-info">
                <div>{status}</div>
            </div>
            <br></br>
            <div className="game">
                <Board 
                size = {currentSize}
                dimention = {currentDim}
                squares = {current.squares}
                onClick = {(i) => this.handleClick(i)}
                />
            </div>
        </div>
        );
    }
}

export default Game;