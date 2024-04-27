import React, { useState } from 'react';

const TicTacToe: React.FC = () => {
  const initialBoard = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];

  const [board, setBoard] = useState<string[][]>(initialBoard);
  const [player, setPlayer] = useState<'X' | 'O'>('X');

  const handleClick = (row: number, col: number) => {
    const newBoard = [...board];
    newBoard[row][col] = player;
    setBoard(newBoard);
    setPlayer(player === 'X' ? 'O' : 'X');
  };

  const resetGame = () => {
    setBoard(initialBoard);
    setPlayer('X');
  };

  return (
    <div className="tictactoe">
      <h1>Tic Tac Toe</h1>
      <div className="board">
        {board.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((cell, colIndex) => (
              <div
                key={colIndex}
                className="cell"
                onClick={() => handleClick(rowIndex, colIndex)}
              >
                {cell}
              </div>
            ))}
          </div>
        ))}
      </div>
      <button onClick={resetGame}>Reset Game</button>
    </div>
  );
};

export default TicTacToe;