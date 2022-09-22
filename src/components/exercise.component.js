import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Exercise = (props) => {
  const { exercise, deleteExercise } = props;
  return (
    <tr>
      <td>{exercise.username}</td>
      <td>{exercise.description}</td>
      <td>{exercise.duration}</td>
      <td>{exercise.date.substring(0, 10)}</td>
      <td>
        <Link to={`/edit/${exercise._id}`}>edit</Link> |{' '}
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

Exercise.propTypes = {
  exercise: PropTypes.shape({
    username: PropTypes.string,
    description: PropTypes.string,
    duration: PropTypes.number,
    date: PropTypes.string,
  }).isRequired,
  deleteExercise: PropTypes.func.isRequired,
};

export default Exercise;
