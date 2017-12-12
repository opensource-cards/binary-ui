import PropTypes from 'prop-types';
import React from 'react';
import TooltipWrapper from '../components-styled/TooltipWrapper';

const propTypes = {
  isVisible: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  placement: PropTypes.oneOf([
    'bottom-right',
    'bottom-left',
    'top-right',
    'top-left',
  ]),
};

const defaultProps = {
  placement: 'bottom-right',
};

const Tooltip = ({ isVisible, label, placement, ...props }) => (
  <TooltipWrapper isVisible={isVisible} placement={placement} {...props} >
    {label}
  </TooltipWrapper>
);

Tooltip.propTypes = propTypes;
Tooltip.defaultProps = defaultProps;

export default Tooltip;
