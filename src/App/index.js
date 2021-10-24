import React, { Component } from 'react';
import Tweets from '../Tweets';
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom';
import './style.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { userName: '' };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    this.setState({ userName: event.target.value });
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.history.push({
      pathname: '/tweets',
    });
  }

  render() {
    return (
      <div>
        <p className="tweets-analysis-service">Tweets Analysis Service </p>
        <form id="input-form" action='/tweets' method="post" onSubmit={this.onSubmit}>
          <div className="username-input-box">
            <input className="username-input-box" id="input-box" name="userName" value={this.state.userName} onChange={this.onChange} title="userName" placeholder="Enter user name" />
          </div>
          <div className="submit-button" type="submit" form="input-form">
            <span className="submit-button-text">SUBMIT</span>
          </div>
        </form>
        <Route exact path='/tweets' component={() => <Tweets userName={this.state.userName} />} />
      </div>
    )
  }

}

export default withRouter(App);
