import React from 'react';
import PropTypes from 'prop-types';

export const Title = ({ title }) => (
  <h1 className='main'>{title}</h1>
);

Title.propTypes = {
  title: PropTypes.string.isRequired,
};
