import React, { useState } from "react";
import FeedbackOptions from "../feedbackOptions/FeedbackOptions";
import Statistics from "../statistics/Statistics";
import Section from "../section/Section";
import "./Main.css";
import data from "../../data";

const { options, statsOptions, titleOptions } = data;

const initialState = {
  good: 0,
  neutral: 0,
  bad: 0,
  language: "en",
};

const Main = () => {
  const [state, setState] = useState(initialState);

  const handleLangChange = (e) => {
    const { value } = e.target;
    setState((prev) => ({ ...prev, language: value }));
  };

  const handleGoodFeedback = (e) => {
    setState((prev) => ({
      ...prev,
      [e.target.name]: prev[e.target.name] + 1,
    }));
  };

  const countTotalFeedback = () => {
    const { good, neutral, bad } = state;
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const result = Math.ceil((state.good / countTotalFeedback()) * 100);
    return `${result}%`;
  };

  return (
    <>
      <Section
        className="sectionTitle"
        title={titleOptions[state.language].feedback}
      >
        <select name="language" onChange={handleLangChange}>
          <option value="en">English</option>
          <option value="ru">Русский</option>
        </select>

        <FeedbackOptions
          options={options[state.language]}
          onLeaveFeedback={handleGoodFeedback}
        />
      </Section>
      <Section
        className="sectionTitle"
        title={titleOptions[state.language].stats}
      >
        <Statistics
          good={state.good}
          neutral={state.neutral}
          bad={state.bad}
          values={state}
          language={state.language}
          statsOptions={statsOptions[state.language]}
          countTotalFeedback={countTotalFeedback}
          countPositiveFeedbackPercentage={countPositiveFeedbackPercentage}
        />
      </Section>
    </>
  );
};

export default Main;
