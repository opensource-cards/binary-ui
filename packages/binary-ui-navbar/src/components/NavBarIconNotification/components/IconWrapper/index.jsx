import PropTypes from 'prop-types';
import React from 'react';

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

const IconWrapper = ({ children }) => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'flex-end',
    }}
  >
    {children}
  </div>
);

IconWrapper.propTypes = propTypes;
IconWrapper.defaultProps = defaultProps;

export default IconWrapper;
