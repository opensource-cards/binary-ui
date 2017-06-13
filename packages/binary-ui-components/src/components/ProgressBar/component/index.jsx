import PropTypes from 'prop-types';
import React from 'react';
import ProgressContainer from '../components-styled/ProgressContainer';
import ProgressIndicator from '../components-styled/ProgressIndicator';

const propTypes = {
  progress: PropTypes.number.isRequired,
  onPositionChange: PropTypes.func.isRequired,
};

const defaultProps = {
};

const ProgressBar = ({ progress, onPositionChange }) => (
  <ProgressContainer>
    <ProgressIndicator progress={progress} onPositionChange={onPositionChange} />
  </ProgressContainer>
);

ProgressBar.defaultProps = defaultProps;
ProgressBar.propTypes = propTypes;

export default ProgressBar;
