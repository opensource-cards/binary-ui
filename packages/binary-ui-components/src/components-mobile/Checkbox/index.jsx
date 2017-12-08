import Check from 'binary-ui-icons/binary/Check';
import Uncheck from 'binary-ui-icons/binary/Uncheck';
import { BINARY_COLOR_BLUE_40, BINARY_COLOR_GRAY_80 } from 'binary-ui-styles';
import PropTypes from 'prop-types';
import React from 'react';

const propTypes = {
  isChecked: PropTypes.bool.isRequired,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
};

const defaultProps = {
  onChange: undefined,
  onClick: undefined,
};

export default class Checkbox extends React.PureComponent {

  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    const { isChecked, onChange, onClick } = this.props;
    if (onClick) {
      onClick(e);
    }
    if (onChange) {
      onChange(!isChecked);
    }
  }

  render() {
    // Note: No need to pass 'onChange' and 'onClick' handlers.
    /* eslint-disable no-unused-vars */
    const { isChecked, onChange, onClick, ...props } = this.props;
    /* eslint-enable no-unused-vars */
    return (
      <div onClick={this.onClick} {...props} >
        {isChecked ? (
          <Check color={BINARY_COLOR_BLUE_40} size={30} />
        ) : (
          <Uncheck color={BINARY_COLOR_GRAY_80} size={30} />
        )}
      </div>
    );
  }
}

Checkbox.propTypes = propTypes;
Checkbox.defaultProps = defaultProps;
