
import React, { useState, useEffect } from 'react';
import { QUESTIONS } from './questions'; 
import Option from './Option';
import ScoreBoard from './ScoreBoard';


const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [score, setScore] = useState(0);
  const [avgRating, setAvgRating] = useState(0);
  const [testCompleted, setTestCompleted] = useState(false);
  const totalQuestions = Object.keys(QUESTIONS).length;

  const handleAnswer = (answer) => {
    const updatedScore = answer === 'Yes' ? score + 1 : score;
    setScore(updatedScore);
    setCurrentQuestion(currentQuestion + 1);

    if (currentQuestion === totalQuestions) {
      const rating = (100 * updatedScore) / totalQuestions;
      setAvgRating(rating);
     
      setTestCompleted(true);
    }
  };
  const handleRestart =()=>{
        setScore(0);
       setCurrentQuestion(1);
       setTestCompleted(false);
  }

  useEffect(() => {
    setAvgRating((100 * score) / totalQuestions);
  }, [score, totalQuestions]);

  return (
    <>
    <div className="container">
      <div className="main">
      <div className='Option'>
        {currentQuestion <= totalQuestions && (
          <Option
            question={QUESTIONS[currentQuestion]}
            handleAnswer={handleAnswer}
          />
        )}
      </div>
      {
       
      testCompleted &&  <ScoreBoard score={score} avgRating={avgRating} handleRestart ={handleRestart} />
     
      }
     </div>
     </div>
    </>
  );
};

export default App;
