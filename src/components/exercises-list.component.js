import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';
import Exercise from './exercise.component';

export default class ExerciseList extends Component {
  constructor(props) {
    super(props);

    this.deleteExercise = this.deleteExercise.bind(this);

    this.state = { exercises: [] };
  }

  componentDidMount() {
    axios
      .get('https://exercise-tracker-api-s.herokuapp.com/exercises/')
      .then((res) => {
        this.setState({ exercises: res.data });
      })
      .catch((err) => console.log(err));
  }

  deleteExercise(id) {
    axios
      .delete(`https://exercise-tracker-api-s.herokuapp.com/exercises/${id}`)
      .then((res) => console.log(res.data));

    const { exercises } = this.state;
    this.setState({
      exercises: exercises.filter((el) => el._id !== id),
    });
  }

  exerciseList() {
    const { exercises } = this.state;
    return exercises.map((currentExercise) => (
      <Exercise
        exercise={currentExercise}
        data-test="component-exercise"
        deleteExercise={this.deleteExercise}
        key={currentExercise._id}
      />
    ));
  }

  render() {
    return (
      <div data-test="component-exercise-list">
        <h3 data-test="title">Logged Exercises</h3>
        <table className="table" data-test="table">
          <thead className="thead-light">
            <tr data-test="table-row">
              <th>Username</th>
              <th>Description</th>
              <th>Duration</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody data-test="table-body">{this.exerciseList()}</tbody>
        </table>
      </div>
    );
  }
}

Exercise.propTypes = {
  exercise: PropTypes.shape({
    username: PropTypes.string,
    description: PropTypes.string,
    duration: PropTypes.number,
    date: PropTypes.string,
    _id: PropTypes.string,
  }).isRequired,
  deleteExercise: PropTypes.func.isRequired,
};
