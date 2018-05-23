import PropTypes from 'prop-types';
import React from 'react';
import ProgressContainer from '../components-styled/ProgressContainer';
import ProgressIndicator from '../components-styled/ProgressIndicator';
import ProgressScale from '../components-styled/ProgressScale';

const propTypes = {
  progress: PropTypes.number.isRequired,
};

const defaultProps = {};

const ProgressBar = ({ progress, ...props }) => (
  <ProgressContainer {...props} >
    <ProgressScale />
    <ProgressIndicator progress={Math.min(Math.max(progress, 0), 100)} />
  </ProgressContainer>
);

ProgressBar.defaultProps = defaultProps;
ProgressBar.propTypes = propTypes;

export default ProgressBar;
