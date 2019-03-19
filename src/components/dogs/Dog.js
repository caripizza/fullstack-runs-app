import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Dog = ({ name, age, weight }) => {
  return (
    <>
      <h2>{name}</h2>
      <p>{age}</p>
      <p>{weight}</p>
      <Link to={'/'}>back to Dogs List</Link>
    </>
  );
};

Dog.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  weight: PropTypes.string.isRequired
};

export default Dog;
