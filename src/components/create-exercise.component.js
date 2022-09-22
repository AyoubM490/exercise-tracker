import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default class CreateExercise extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      description: '',
      duration: 0,
      date: new Date(),
      users: [],
    };

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeDuration = this.onChangeDuration.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    axios
      .get('https://exercise-tracker-api-s.herokuapp.com/users/')
      .then((res) => {
        if (res.data.length > 0) {
          this.setState({
            users: res.data.map((user) => user.username),
            username: res.data[0].username,
          });
        }
      });
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value,
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value,
    });
  }

  onChangeDuration(e) {
    this.setState({
      duration: e.target.value,
    });
  }

  onChangeDate(date) {
    this.setState({
      date,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const {
      username, description, duration, date,
    } = this.state;

    const exercise = {
      username,
      description,
      duration,
      date,
    };

    console.log(exercise);

    axios
      .post(
        'https://exercise-tracker-api-s.herokuapp.com/exercises/add',
        exercise,
      )
      .then((res) => console.log(res.data));

    window.location = '/';
  }

  render() {
    const {
      username, description, duration, date, users,
    } = this.state;
    return (
      <div data-test="component-create-exercise">
        <h3 data-test="create-exercise-title">Create New Exercise Log</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group my-3">
            <label>Username: </label>
            <select
              ref="userInput"
              required
              className="form-control"
              value={username}
              data-test="username-input"
              onChange={this.onChangeUsername}
            >
              {users.map((user) => (
                <option key={user} value={user}>
                  {user}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group my-3">
            <label>Description: </label>
            <input
              type="text"
              required
              className="form-control"
              value={description}
              data-test="description-input"
              onChange={this.onChangeDescription}
            />
          </div>
          <div className="form-group my-3">
            <label>Duration (in minutes): </label>
            <input
              type="text"
              className="form-control"
              value={duration}
              data-test="duration-input"
              onChange={this.onChangeDuration}
            />
          </div>
          <div className="form-group my-3">
            <label>Date: </label>
            <div data-test="date-input">
              <DatePicker
                selected={date}
                onChange={this.onChangeDate}
                data-test="date-picker-input"
              />
            </div>
          </div>
          <div className="form-group my-3">
            <input
              type="submit"
              data-test="submit-button"
              value="Create Exercise Log"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
