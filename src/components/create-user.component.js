import React, { Component } from 'react';
import axios from 'axios';

export default class CreateUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
    };

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const { username } = this.state;

    const user = {
      username,
    };

    this.setState({
      username: '',
    });

    console.log(user);

    axios
      .post('https://exercise-tracker-api-s.herokuapp.com/users/add', user)
      .then((res) => console.log(res.data));
  }

  render() {
    const { username } = this.state;
    return (
      <div>
        <h3>Create New User</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group my-3">
            <label>Username: </label>
            <input
              type="text"
              required
              className="form-control"
              value={username}
              onChange={this.onChangeUsername}
            />
          </div>
          <div className="form-group my-3">
            <input
              type="submit"
              value="Create User"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
