import PropTypes from 'prop-types';
import React from 'react';
import TooltipStyled from './components-styled/TooltipStyled';

const propTypes = {
  label: PropTypes.string.isRequired,
  placement: PropTypes.oneOf(['topright', 'topleft']),
  onClick: PropTypes.func,
};

const defaultProps = {
  label: undefined,
  placement: 'topright',
  onClick: undefined,
};

export default class Tooltip extends React.Component {

  render() {
    const { label, placement } = this.props;
    return (
      <TooltipStyled
        placement={placement}
      >
        {label}
      </TooltipStyled>
    );
  }
}

Tooltip.propTypes = propTypes;
Tooltip.defaultProps = defaultProps;
