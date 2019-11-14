import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Location = ({ city }) => ( <div className="locationCont"><h1> { city } </h1></div> ); // Destructuring

Location.propTypes = { city: PropTypes.string.isRequired };

export default Location;