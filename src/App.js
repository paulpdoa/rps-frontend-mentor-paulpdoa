import { useState } from 'react';

import Hands from './components/Hands';
import Rules from './components/Rules';
import Header from './components/Header';
import RulesModal from './components/RulesModal';
import ChosenHands from './components/ChosenHands';

import Rock from './components/Rock';
import Paper from './components/Paper';
import Scissor from './components/Scissor';
import Footer from './components/Footer';

const App = () => {

  const [score,setScore] = useState(0);
  const [showModal,setShowModal] = useState(false);
  const [showChoices,setShowChoices] = useState(true);
  const [userChoice,setUserChoice] = useState('');
  const [computer,setComputer] = useState('');

  const [result,setResult] = useState('');
 
  // Choices
  const [computerChoice] = useState(['paper','rock','scissor']);

  // Function for selecting a choice
  const selectChoice = (userHand) => {
    let computerHand = computerChoice[Math.floor(Math.random() * 3)];
    setShowChoices(false);
    setUserChoice(userHand);
    setComputer(computerHand);
    if(userHand === 'rock' && computerHand === 'scissor') {
      setResult('YOU WIN');
      setTimeout(() => {
         setScore(score + 1);
      },1000)
    } else if(userHand === 'scissor' && computerHand === 'paper') {
      setResult('YOU WIN');
      setTimeout(() => {
         setScore(score + 1);
      },1000)
    } else if(userHand === 'paper' && computerHand ==='rock') {
      setResult('YOU WIN');
      setTimeout(() => {
         setScore(score + 1);
      },1000)
    } else if(userHand === computerHand) {
      setResult('IT\'S A TIE!');
    } else {
      setResult('YOU LOSE');
    }
  }

  return (
   <>
     <Header score={score} />
     { showChoices && <Hands selectChoice={selectChoice} /> }
     { !showChoices && <ChosenHands setShowChoices={setShowChoices} setResult={setResult} result={result} userChoice={userChoice} computer={computer} Rock={Rock} Paper={Paper} Scissor={Scissor} /> } 
     <Rules setShowModal={setShowModal} />
     { showModal && <RulesModal setShowModal={setShowModal} /> }
     <Footer />
   </>
  );
}

export default App;
