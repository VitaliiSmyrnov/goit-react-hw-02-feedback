import { Section } from 'components/Section/Section';
import { Component } from 'react';
import { Wrapper } from './App.styled';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedbackIncrement = value => {
    this.setState(prevState => ({ [value]: prevState[value] + 1 }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    const sum = good + neutral + bad;
    return sum === 0 ? '0%' : Math.round((good / sum) * 100) + '%';
  };

  render() {
    const { good, neutral, bad } = this.state;
    const {
      state,
      handleFeedbackIncrement,
      countTotalFeedback,
      countPositiveFeedbackPercentage,
    } = this;
    return (
      <Wrapper>
        <Section title="Please leave feedback">
          <ul>
            <li>
              <button
                type="button"
                onClick={() => handleFeedbackIncrement('good')}
              >
                Good
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => handleFeedbackIncrement('neutral')}
              >
                Neutral
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => handleFeedbackIncrement('bad')}
              >
                Bad
              </button>
            </li>
          </ul>
        </Section>
        <h1>Please leave feedback</h1>

        <h1>Statistics</h1>
        <ul>
          <li>
            <p>Good: {good}</p>
          </li>
          <li>
            <p>Neutral: {neutral}</p>
          </li>
          <li>
            <p>Bad: {bad}</p>
          </li>

          <li>
            <p>Total: {countTotalFeedback()}</p>
          </li>
          <li>
            <p>Positive feedback: {countPositiveFeedbackPercentage()}</p>
          </li>
        </ul>
        <p></p>
      </Wrapper>
    );
  }
}
