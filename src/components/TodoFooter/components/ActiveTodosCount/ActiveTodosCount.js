import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getNumOfActiveItems } from '../../../../redux/selectors';

import './ActiveTodosCount.scss';

const mapState = (state) => ({
  numActive: getNumOfActiveItems(state)
});

const ActiveTodosCount = ({ numActive }) => {
  const numCopy = (numActive === 1) ? 'item' : 'items';

  return <span className="active-todos-count">{numActive} {numCopy} left</span>;
};

ActiveTodosCount.propTypes = {
  numActive: PropTypes.number.isRequired
};

export default connect(mapState)(ActiveTodosCount);
