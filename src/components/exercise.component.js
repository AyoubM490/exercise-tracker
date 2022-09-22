import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Exercise = (props) => {
  const { exercise, deleteExercise } = props;
  return (
    <tr data-test="component-exercise">
      <td data-test="username">{exercise.username}</td>
      <td data-test="description">{exercise.description}</td>
      <td data-test="duration">{exercise.duration}</td>
      <td data-test="date">{exercise.date.substring(0, 10)}</td>
      <td>
        <Link to={`/edit/${exercise._id}`}>edit</Link>
        {' '}
        |
        {' '}
        <button
          type="button"
          className="btn btn-danger"
          data-test="delete-button"
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

Exercise.propTypes = {
  exercise: PropTypes.shape({
    username: PropTypes.string,
    description: PropTypes.string,
    duration: PropTypes.number,
    date: PropTypes.string,
    _id: PropTypes.string,
  }),
  deleteExercise: PropTypes.func,
};

Exercise.defaultProps = {
  exercise: {
    username: '',
    description: '',
    duration: 0,
    date: '',
  },
  deleteExercise: () => {},
};

export default Exercise;
