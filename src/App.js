import React, { useState } from 'react';
import './App.css';
import Body from './components/Body';
import Header from "./components/Header"
function App() {
  const [play, setPlay] = useState(false);
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [playerHand, setPlayerHand] = useState("rock")
  const [computerHand, setComputerHand] = useState("rock")
  const [message, setMessage] = useState("Play!");
  const computerMoves = ["rock", "paper", "scissors"];

  const roll = move => {
    setPlay(true);
    const compPlay = Math.floor(Math.random() * 3);
    compareHands(move, computerMoves[compPlay]);
    setTimeout(() => {
      setPlay(false);
    }, 2000)
  };
  const setWinner = (message, player, computer) => {
    setMessage(message);
    if (player !== undefined) {
      setComputerScore(computerScore + computer);
      setPlayerScore(playerScore + player);
    }
    return;
  };
  const compareHands = (player, computer) => {
    setPlayerHand(player);
    setComputerHand(computer);
    switch (player) {
      case "rock":
        if (computer === "rock") {
          setWinner("Its a tie!")
          return;
        } else if (computer === "paper") {
          setWinner("Computer wins!", 0, 1);
          return;
        } else {
          setWinner("Player wins!", 1, 0);
          return;
        }
      case "paper":
        if (computer === "rock") {
          setWinner("Player wins!", 1, 0);
          return;
        } else if (computer === "paper") {
          setWinner("Its a tie!")
          return;
        } else {
          setWinner("Computer wins!", 0, 1);
          return;
        };
      case "scissors":
        if (computer === "rock") {
          setWinner("Computer wins!", 0, 1);
          return;
        } else if (computer === "paper") {
          setWinner("Player wins!", 1, 0);
          return;
        } else {
          setWinner("Its a tie!")
          return
        }
      default:
        return
    }
  }
  const commonProps = {
    play,
    roll,
    compareHands,
    playerScore,
    computerScore,
    message,
    computerHand,
    playerHand
  };
  return (
    <div className="App">
      <Header {...commonProps} />
      <Body {...commonProps} />
    </div>
  );
};

export default App;
