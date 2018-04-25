import PropTypes from 'prop-types';
import React from 'react';
import { TouchableNativeFeedback } from 'react-native';
import TitleIcon from './components-styled/TitleIcon';
import TitleWrapperActionable from './components-styled/TitleWrapperActionable';
import TitleText from '../../components-styled/TitleText';

const propTypes = {
  children: PropTypes.node,
  onLongPress: PropTypes.func,
  onPress: PropTypes.func,
  onPressIn: PropTypes.func,
  onPressOut: PropTypes.func,
};

const defaultProps = {
  children: undefined,
  onLongPress: undefined,
  onPress: undefined,
  onPressIn: undefined,
  onPressOut: undefined,
};

const NavBarTitleAction = ({
  children,
  onLongPress,
  onPress,
  onPressIn,
  onPressOut,
  ...props,
}) => (
  <TouchableNativeFeedback
    onLongPress={onLongPress}
    onPress={onPress}
    onPressIn={onPressIn}
    onPressOut={onPressOut}
  >
    <TitleWrapperActionable {...props}>
      <TitleText>{children}</TitleText>
      <TitleIcon size={15} />
    </TitleWrapperActionable>
  </TouchableNativeFeedback>
);

NavBarTitleAction.propTypes = propTypes;
NavBarTitleAction.defaultProps = defaultProps;

export default NavBarTitleAction;
