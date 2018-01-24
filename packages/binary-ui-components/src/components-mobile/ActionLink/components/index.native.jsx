import { BINARY_COLOR_BLUE_40, OPACITY_ACTIVE } from 'binary-ui-styles';
import PropTypes from 'prop-types';
import React from 'react';
import { Linking } from 'react-native';
import ActionLinkWrapper from '../components-styled/ActionLinkWrapper';
import ActionTextWrapper from '../components-styled/ActionTextWrapper';
import ActionableIconLeft from '../components-styled/ActionableIconLeft';
import ActionableIconRight from '../components-styled/ActionableIconRight';
import ActionableText from '../components-styled/ActionableText';

const propTypes = {
  href: PropTypes.string,
  isDisabled: PropTypes.bool,
  label: PropTypes.string,
  size: PropTypes.number,
  renderIconLeft: PropTypes.func,
  renderIconRight: PropTypes.func,
  onLongPress: PropTypes.func,
  onPress: PropTypes.func,
  onPressIn: PropTypes.func,
  onPressOut: PropTypes.func,
};

const defaultProps = {
  href: undefined,
  isDisabled: false,
  label: undefined,
  size: undefined,
  renderIconLeft: undefined,
  renderIconRight: undefined,
  onLongPress: undefined,
  onPress: undefined,
  onPressIn: undefined,
  onPressOut: undefined,
};

class ActionLink extends React.Component {
  constructor(props) {
    super(props);
    this.onPress = this.onPress.bind(this);
  }

  onPress() {
    const { href, isDisabled } = this.props;
    if (isDisabled) {
      return;
    }
    Linking.canOpenURL(href)
      .then(supported => {
        if (!supported) {
          if (process.env.NODE_ENV !== 'production') {
            console.warn('Can\'t handle url:', href);
            return undefined;
          }
        }
        return Linking.openURL(href);
      })
      .catch(error => {
        if (process.env.NODE_ENV !== 'production') {
          console.warn('An error occurred', error);
        }
      });
  }

  renderIconLeft(renderIcon) {
    const { size } = this.props;
    return (
      <ActionableIconLeft>
        {renderIcon({ color: BINARY_COLOR_BLUE_40, size })}
      </ActionableIconLeft>
    );
  }

  renderIconRight(renderIcon) {
    const { size } = this.props;
    return (
      <ActionableIconRight>
        {renderIcon({ color: BINARY_COLOR_BLUE_40, size })}
      </ActionableIconRight>
    );
  }

  render() {
    /* eslint-disable no-unused-vars */
    const {
      isDisabled,
      label,
      renderIconLeft,
      renderIconRight,
      onLongPress,
      onPress,
      onPressIn,
      onPressOut,
      ...props,
    } = this.props;
    /* eslint-enable no-unused-vars */
    return isDisabled ? (
      <ActionTextWrapper
        onLongPress={!undefined}
        onPress={this.onPress}
        onPressIn={undefined}
        onPressOut={undefined}
        {...props}
      >
        {renderIconLeft ? this.renderIconLeft(renderIconLeft) : null}
        <ActionableText>
          {label}
        </ActionableText>
        {renderIconRight ? this.renderIconRight(renderIconRight) : null}
      </ActionTextWrapper>
    ) : (
      <ActionLinkWrapper
        activeOpacity={OPACITY_ACTIVE}
        onLongPress={onLongPress}
        onPress={this.onPress}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        {...props}
      >
        {renderIconLeft ? this.renderIconLeft(renderIconLeft) : null}
        <ActionableText>
          {label}
        </ActionableText>
        {renderIconRight ? this.renderIconRight(renderIconRight) : null}
      </ActionLinkWrapper>
    );
  }
}

ActionLink.propTypes = propTypes;
ActionLink.defaultProps = defaultProps;

export default ActionLink;
