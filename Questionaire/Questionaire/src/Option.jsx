const Option = ({ question, handleAnswer }) => {
  return (
    <>
      <h3>{question}</h3>
      <button className="btn" onClick={() => handleAnswer('Yes')}>Yes</button>
      <button className="btn" onClick={() => handleAnswer('No')}>No</button>
    </>
  )
}

export default Option
