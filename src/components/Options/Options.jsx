import css from "./Options.module.css";
export const Options = ({
  onFeedbackUpdate,
  handleResetClick,
  totalFeedback,
}) => {
  const handelFeedbackClick = (name) => {
    onFeedbackUpdate(name);
  };

  return (
    <div className={css.buttonContainer}>
      <button
        className={css.button}
        type="button"
        onClick={() => {
          handelFeedbackClick("good");
        }}
      >
        Good
      </button>
      <button
        className={css.button}
        type="button"
        onClick={() => {
          handelFeedbackClick("neutral");
        }}
      >
        Neutral
      </button>
      <button
        className={css.button}
        type="button"
        onClick={() => {
          handelFeedbackClick("bad");
        }}
      >
        Bad
      </button>
      {totalFeedback > 0 && (
        <button className={css.button} type="button" onClick={handleResetClick}>
          Reset
        </button>
      )}
    </div>
  );
};
