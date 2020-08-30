import React from 'react';
import PropTypes from 'prop-types';

const WorldPage = (props) => {
  const { data } = props;

  console.log(data);

  return <h2>World Page</h2>;
};
WorldPage.propTypes = {
  data: PropTypes.arrayOf.isRequired,
};

export default WorldPage;
