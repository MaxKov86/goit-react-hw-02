import { Notification } from "./Notification";
import css from "./Feedback.module.css";
export const Feedback = ({
  goodFeedback,
  neutralFeedback,
  badFeedback,
  totalFeedback,
}) => {
  const positiveFeedback = Math.round(
    ((goodFeedback + neutralFeedback) / totalFeedback) * 100
  );

  return (
    <div className={css.feedbackContainer}>
      {totalFeedback === 0 ? (
        <Notification />
      ) : (
        <ul className={css.feedback}>
          <li>Good: {goodFeedback}</li>
          <li>Neutral: {neutralFeedback}</li>
          <li>Bad: {badFeedback}</li>
          <li>Total: {totalFeedback}</li>
          <li>
            Positive:
            <span
              className={
                positiveFeedback >= 50 ? css.positiveColor : css.badColor
              }
            >
              {positiveFeedback}%
            </span>
          </li>
        </ul>
      )}
    </div>
  );
};
