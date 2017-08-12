import ArrowRight from 'binary-ui-icons/binary/ArrowRight';
import PropTypes from 'prop-types';
import React from 'react';
import { TouchableHighlight, View } from 'react-native';
import ButtonContent from './ButtonContent.native';
import { COLOR_BLACK, TAP_HIGHLIGHT_COLOR } from '../../../utils/styles';

const propTypes = {
  color: PropTypes.string,
  isBold: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isEdit: PropTypes.bool,
  label: PropTypes.string.isRequired,
  renderIcon: PropTypes.func,
  onPress: PropTypes.func.isRequired,
};

const defaultProps = {
  color: COLOR_BLACK,
  isBold: false,
  isDisabled: false,
  isEdit: true,
  renderIcon: () => (<ArrowRight />),
};

const Button = ({
  color,
  isBold,
  isDisabled,
  isEdit,
  label,
  renderIcon,
  onPress,
  ...props,
}) => (
  !isDisabled ? (
    <TouchableHighlight
      underlayColor={TAP_HIGHLIGHT_COLOR}
      onPress={onPress}
      {...props}
    >
      <View style={{ width: '100%' }} >
        <ButtonContent
          color={color}
          isBold={isBold}
          isDisabled={isDisabled}
          isEdit={isEdit}
          label={label}
          renderIcon={renderIcon}
        />
      </View>
    </TouchableHighlight>
  ) : (
    <View {...props} >
      <ButtonContent
        color={color}
        isBold={isBold}
        isDisabled={isDisabled}
        isEdit={isEdit}
        label={label}
        renderIcon={renderIcon}
      />
    </View>
  )
);

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
