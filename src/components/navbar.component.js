import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    return (
      <nav
        className="navbar navbar-dark bg-dark navbar-expand-lg"
        data-test="component-navbar"
      >
        <Link to="/" className="navbar-brand" data-test="title">
          ExcerTracker
        </Link>
        <div className="collpase navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/" className="nav-link" data-test="exercise-link">
                Exercises
              </Link>
            </li>
            <li className="navbar-item">
              <Link
                to="/create"
                className="nav-link"
                data-test="create-exercise-link"
              >
                Create Exercise Log
              </Link>
            </li>
            <li className="navbar-item">
              <Link
                to="/user"
                className="nav-link"
                data-test="create-user-link"
              >
                Create User
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
