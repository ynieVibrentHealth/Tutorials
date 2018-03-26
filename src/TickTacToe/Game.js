import React from 'react'
import Board from './Board'

class Game extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            history: [{
                squares:Array(9)
            }].fill(null),
            xIsNext:true
        };
    }

    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board></Board>
                </div>
                <div className="game-info">
                    <div>Status</div>
                    <div>Todo</div>
                </div>
            </div>
        )
    }
}

export default Game