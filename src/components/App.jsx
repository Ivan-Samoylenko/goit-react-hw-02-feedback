import { Component } from 'react';
import { FeedbackOptions } from 'components/FeedbackOptions';
import { Statistics } from 'components/Statistics';
import { options } from 'constants';

export class App extends Component {
  state = { good: 0, neutral: 0, bad: 0 };

  countTotalFeedback() {
    return Object.values(this.state).reduce((acc, el) => acc + el, 0);
  }

  countPositiveFeedbackPercentage() {
    return `${Math.round(
      (this.state.good / this.countTotalFeedback()) * 100
    )}%`;
  }

  onLeaveFeedback = name => {
    this.setState(prevState => (prevState[name] += 1));
  };

  render() {
    return (
      <>
        <FeedbackOptions
          options={options}
          onLeaveFeedback={this.onLeaveFeedback}
        ></FeedbackOptions>
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        ></Statistics>
      </>
    );
  }
}
