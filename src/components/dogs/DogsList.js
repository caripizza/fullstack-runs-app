import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Dogs = ({ dogs }) => {
  const dogsList = dogs.map((dog, idx) => {
    return (
      <li key={idx}>
        <Link to={`/dogs/${dog._id}`}>
          <h2>{dog.name}</h2>
          <p>{dog._id}</p>
        </Link>
      </li>
    );
  });
  return (
    <>
    <h1>Welcome to the Dogs List!</h1>
    <ul>
      {dogsList}
    </ul>
    </>
  );
};

Dogs.propTypes = {
  dogs: PropTypes.array.isRequired
};

export default Dogs;
