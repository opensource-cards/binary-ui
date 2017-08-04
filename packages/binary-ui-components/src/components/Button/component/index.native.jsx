import ArrowRight from 'binary-ui-icons/binary/ArrowRight';
import PropTypes from 'prop-types';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import ButtonContent from './ButtonContent.native';

const propTypes = {
  color: PropTypes.string,
  isBold: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isEdit: PropTypes.bool,
  label: PropTypes.string.isRequired,
  renderIcon: PropTypes.func,
  onClick: PropTypes.func.isRequired,
};

const defaultProps = {
  color: '#000000',
  isBold: false,
  isDisabled: false,
  isEdit: true,
  renderIcon: () => (<ArrowRight />),
};

const Button = ({ isDisabled, ...props }) => (
  !isDisabled ? (
    <TouchableOpacity>
      <ButtonContent isDisabled={isDisabled} {...props} />
    </TouchableOpacity>
  ) : (
    <ButtonContent isDisabled={isDisabled} {...props} />
  )
);

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
