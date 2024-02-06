import { useState, useEffect } from "react";
import { Description } from "./Description/Description";
import { Options } from "./Options/Options";
import { Feedback } from "./Feedback/Feedback";

function App() {
  const [feedback, setFeedback] = useState(() => {
    const savedFeedbacks = window.localStorage.getItem("saved-feedbacks");
    if (savedFeedbacks !== null) {
      return JSON.parse(savedFeedbacks);
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  useEffect(() => {
    window.localStorage.setItem("saved-feedbacks", JSON.stringify(feedback));
  }, [feedback]);

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  const updateGoodFeedback = () => {
    setFeedback({
      ...feedback,
      good: feedback.good + 1,
    });
  };

  const updateNeutralFeedback = () => {
    setFeedback({
      ...feedback,
      neutral: feedback.neutral + 1,
    });
  };
  const updateBadFeetback = () => {
    setFeedback({
      ...feedback,
      bad: feedback.bad + 1,
    });
  };
  const resetFeedback = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  return (
    <>
      <Description />
      <Options
        handleGoodClick={updateGoodFeedback}
        handleNeutralClick={updateNeutralFeedback}
        handleBadClick={updateBadFeetback}
        handleResetClick={resetFeedback}
        totalFeedback={totalFeedback}
      />
      <Feedback
        goodFeedback={feedback.good}
        neutralFeedback={feedback.neutral}
        badFeedback={feedback.bad}
        totalFeedback={totalFeedback}
      />
    </>
  );
}

export default App;
