import css from "./Options.module.css";
export const Options = ({
  handleGoodClick,
  handleNeutralClick,
  handleBadClick,
  handleResetClick,
  totalFeedback,
}) => {
  return (
    <div className={css.buttonContainer}>
      <button className={css.button} type="button" onClick={handleGoodClick}>
        Good
      </button>
      <button className={css.button} type="button" onClick={handleNeutralClick}>
        Neutral
      </button>
      <button className={css.button} type="button" onClick={handleBadClick}>
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
