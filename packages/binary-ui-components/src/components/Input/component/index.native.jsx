import PropTypes from 'prop-types';
import React from 'react';
import InputStyled from '../components-styled/InputStyled';
import InputWrapper from '../components-styled/InputWrapper';
import InputIcon from '../components-styled/InputIcon';
import { getHighlightEditStyle } from '../../../utils/styles-api';

const propTypes = {
  value: PropTypes.string.isRequired,
  renderIcon: PropTypes.func,
};

const defaultProps = {
  renderIcon: undefined,
};

export default class Input extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
    };
  }

  setFocus(isActive) {
    if (this.state.isActive === isActive) {
      return;
    }
    this.setState(() => ({
      isActive,
    }));
  }

  render() {
    /* eslint-disable no-unused-vars  */
    const {
      renderIcon,
      value,
      ...props,
    } = this.props;
    /* eslint-enable no-unused-vars  */
    const { isActive } = this.state;
    return (
      <InputWrapper style={getHighlightEditStyle(true, isActive)} >
        {renderIcon && (
          <InputIcon renderIcon={renderIcon} />
        )}
        <InputStyled
          value={value}
          {...props}
        />
      </InputWrapper>
    );
  }
}

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;
