const ScoreBoard = ({ score, avgRating, handleRestart }) => {
  return (
    <div>
      <h2>Score: {score}</h2>
      <h2>Average Rating: {avgRating.toFixed(2)}%</h2>
      <button className="btn" onClick={handleRestart}>Restart</button>
    </div>
  );
};

export default ScoreBoard;
