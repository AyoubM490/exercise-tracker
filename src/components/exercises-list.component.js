import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';

const Exercise = (props) => {
  const { exercise, deleteExercise } = props;
  return (
    <tr>
      <td>{exercise.username}</td>
      <td>{exercise.description}</td>
      <td>{exercise.duration}</td>
      <td>{exercise.date.substring(0, 10)}</td>
      <td>
        <Link to={`/edit/${exercise._id}`}>edit</Link>
        {' '}
        |
        {' '}
        <button
          type="button"
          className="btn btn-danger"
          href="#"
          onClick={() => {
            deleteExercise(exercise._id);
          }}
        >
          delete
        </button>
      </td>
    </tr>
  );
};

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
        deleteExercise={this.deleteExercise}
        key={currentExercise._id}
      />
    ));
  }

  render() {
    return (
      <div>
        <h3>Logged Exercises</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Description</th>
              <th>Duration</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{this.exerciseList()}</tbody>
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
