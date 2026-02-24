import { useState } from "react";

export default function Score() {

    const [scores, setScores] = useState(0);
    function handleSingle() {
       const newScore = scores + 1;
       setScores(newScore);
    }
    function handleDouble() {
        const newScore = scores + 2;
        setScores(newScore);
    }
    function handleTriple() {
        const newScore = scores + 3;
        setScores(newScore);
    }
    function handleFour() {
        const newScore = scores + 4;
        setScores(newScore);
    }
    function handleSix() {
        const newScore = scores + 6;
        setScores(newScore);
    }
  return (
    <div>
      <h1>Bangladesh</h1>
      <h2>Score: {scores}</h2>
      <button className="btn" onClick={handleSingle}>Single Run</button>
      <button onClick={handleDouble}>Double Run</button>
      <button onClick={handleTriple}>Triple Run</button>
      <button onClick={handleFour}>Four Run</button>
      <button onClick={handleSix}>Six Run</button>
    </div>
  );
}