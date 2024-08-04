import React, { useState } from 'react';
import './App.css';

function App () {
  const [quizzes, setQuizzes] = useState('');
  const [labActivities, setLabActivities] = useState('');
  const [finalExam, setFinalExam] = useState('');
  const [finalGrade, setFinalGrade] = useState(null);
  const [gradeEquivalent, setGradeEquivalent] = useState(null);

  const calculateEquivalent = (average) => {
    if (average >= 98.51 && average <= 100) return 4;
    if (average >= 96.51 && average <= 98.5) return 3.75;
    if (average >= 94.51 && average <= 96.5) return 3.5;
    if (average >= 92.51 && average <= 94.5) return 3.25;
    if (average >= 90.51 && average <= 92.5) return 3;
    if (average >= 88.51 && average <= 90.5) return 2.75;
    if (average >= 86.51 && average <= 88.5) return 2.5;
    if (average >= 84.51 && average <= 86.5) return 2.25;
    if (average >= 82.51 && average <= 84.5) return 2;
    if (average >= 80.51 && average <= 82.5) return 1.75;
    if (average >= 78.51 && average <= 80.5) return 1.5;
    if (average >= 76.51 && average <= 78.5) return 1.25;
    if (average >= 74.51 && average <= 76.5) return 1;
    if (average >= 50 && average <= 74.5) return 0;
    return null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const quizzesScore = parseFloat(quizzes);
    const labActScore = parseFloat(labActivities);
    const finalExamScore = parseFloat(finalExam);

    if (!isNaN(quizzesScore) && !isNaN(labActScore) && !isNaN(finalExamScore)) {
      const weightedAverage = (
        quizzesScore * 0.3 +
        labActScore * 0.3 +
        finalExamScore * 0.4
      );
      setFinalGrade(weightedAverage.toFixed(0));
      setGradeEquivalent(calculateEquivalent(weightedAverage).toFixed(2));
    } else {
      alert("Please enter valid numbers for all fields.");
    }
  };

  return (
    <div className="grades-calculator">
      <h1>Grades Calculator</h1>
      <form onSubmit={handleSubmit}>
        <div className="input">
          <label>Quizzes</label>
          <input
            type="number"
            value={quizzes}
            onChange={(e) => setQuizzes(e.target.value)}
            required
          />
        </div>
        <div className="input">
          <label>Lab Activities</label>
          <input
            type="number"
            value={labActivities}
            onChange={(e) => setLabActivities(e.target.value)}
            required
          />
        </div>
        <div className="input">
          <label>Final Exam</label>
          <input
            type="number"
            value={finalExam}
            onChange={(e) => setFinalExam(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {finalGrade !== null && (
        <div className="result">
          <p>Grade: {finalGrade}</p>
          <p>Final Grade: {gradeEquivalent}</p>
        </div>
      )}
      <button className="logout">Logout</button>
    </div>
  );
}

export default App;
