import React from "react";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className="feedbackOptions">
      <div className="counterControls">
        {options.map(({ name, title }) => (
          <button
            key={name}
            type="button"
            name={name}
            onClick={onLeaveFeedback}
          >
            {title}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FeedbackOptions;
