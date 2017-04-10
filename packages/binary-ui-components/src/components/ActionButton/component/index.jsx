import { BINARY_COLOR_BLUE_40 } from 'binary-ui-styles';
import React from 'react';
import ActionableIcon from '../../ActionableIcon';
import ActionableIconWrapper from '../components-styled/ActionableIconWrapper';
import ActionButtonStyled from '../components-styled/ActionButtonStyled';
import ActionButtonWrapper from '../components-styled/ActionButtonWrapper';

const propTypes = {
  children: React.PropTypes.any,
  isDisabled: React.PropTypes.bool,
  onClick: React.PropTypes.func,
  onSubmit: React.PropTypes.func,
  IconComponentLeft: React.PropTypes.func,
  IconComponentRight: React.PropTypes.func,
};

const defaultProps = {
  children: undefined,
  isDisabled: false,
  onClick: undefined,
  onSubmit: undefined,
};

export default class ActionButton extends React.Component {

  renderIconComponent(IconComponent) {
    const { isDisabled } = this.props;
    return (
      <ActionableIconWrapper>
        <ActionableIcon
          color={BINARY_COLOR_BLUE_40}
          isDisabled={isDisabled}
          IconComponent={IconComponent}
        />
      </ActionableIconWrapper>
    );
  }

  render() {
    const {
      children,
      isDisabled,
      onClick,
      onSubmit,
      IconComponentLeft,
      IconComponentRight,
      ...props,
    } = this.props;
    return (
      <ActionButtonStyled
        isDisabled={isDisabled}
        onClick={!isDisabled && onClick}
        onSubmit={!isDisabled && onSubmit}
        {...props}
      >
        <ActionButtonWrapper>
          {IconComponentLeft ? this.renderIconComponent(IconComponentLeft) : null}
          {children}
          {IconComponentRight ? this.renderIconComponent(IconComponentRight) : null}
        </ActionButtonWrapper>
      </ActionButtonStyled>
    );
  }
}

ActionButton.propTypes = propTypes;
ActionButton.defaultProps = defaultProps;
