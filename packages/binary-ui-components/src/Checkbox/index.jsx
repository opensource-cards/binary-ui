import PropTypes from 'prop-types';
import React from 'react';
import { withTheme } from 'styled-components';
import Check from './components-styled/Check';
import Uncheck from './components-styled/Uncheck';

const propTypes = {
  isChecked: PropTypes.bool.isRequired,
  theme: PropTypes.object.isRequired,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
};

const defaultProps = {
  onChange: undefined,
  onClick: undefined,
};

class Checkbox extends React.Component {
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
    // Note: No need to pass 'onChange' handler.
    /* eslint-disable no-unused-vars */
    const { isChecked, theme, onChange, ...props } = this.props;
    /* eslint-enable no-unused-vars */
    return (
      <div {...props} onClick={this.onClick} >
        {isChecked ? (
          <Check color={theme.colorBlue40} size={30} />
        ) : (
          <Uncheck color={theme.colorGray80} size={30} />
        )}
      </div>
    );
  }
}

Checkbox.propTypes = propTypes;
Checkbox.defaultProps = defaultProps;

export default withTheme(Checkbox);
