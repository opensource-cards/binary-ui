import PropTypes from 'prop-types';
import React from 'react';
import { withTheme } from 'styled-components';
import { TouchableNativeFeedback, View } from 'react-native';
import IconContainer from '../components-styled/IconContainer';
import TouchableContainer from '../components-styled/TouchableContainer';

const propTypes = {
  color: PropTypes.string,
  isDisabled: PropTypes.bool,
  size: PropTypes.number,
  theme: PropTypes.object.isRequired,
  renderIcon: PropTypes.func.isRequired,
  onLongPress: PropTypes.func,
  onPress: PropTypes.func,
  onPressIn: PropTypes.func,
  onPressOut: PropTypes.func,
};

const defaultProps = {
  color: 'hsl(0, 0%, 0%)',
  isDisabled: false,
  size: 18,
  onLongPress: undefined,
  onPress: undefined,
  onPressIn: undefined,
  onPressOut: undefined,
};

class ActionIcon extends React.Component {
  renderIcon({ color, isDisabled, size, theme, renderIcon }) {
    return renderIcon({
      color,
      opacity: isDisabled ? theme.opacityDisabled : 1,
      size,
    });
  }

  render() {
    const {
      color,
      isDisabled,
      size,
      theme,
      renderIcon,
      onLongPress,
      onPress,
      onPressIn,
      onPressOut,
      ...props,
    } = this.props;
    return isDisabled ? (
      <View {...props} >
        <TouchableContainer size={size} >
          <IconContainer>
            {this.renderIcon({ color, isDisabled, size, theme, renderIcon })}
          </IconContainer>
        </TouchableContainer>
      </View>
    ) : (
      <View {...props}>
        <TouchableContainer size={size} >
          <TouchableNativeFeedback
            background={TouchableNativeFeedback.Ripple(undefined, true)}
            onLongPress={onLongPress}
            onPress={onPress}
            onPressIn={onPressIn}
            onPressOut={onPressOut}
          >
            <IconContainer>
              {this.renderIcon({ color, isDisabled, size, theme, renderIcon })}
            </IconContainer>
          </TouchableNativeFeedback>
        </TouchableContainer>
      </View>
    );
  }
}

ActionIcon.propTypes = propTypes;
ActionIcon.defaultProps = defaultProps;

export default withTheme(ActionIcon);
