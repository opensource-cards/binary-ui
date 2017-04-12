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
  renderIconLeft: React.PropTypes.func,
  renderIconRight: React.PropTypes.func,
};

const defaultProps = {
  children: undefined,
  isDisabled: false,
  onClick: undefined,
  onSubmit: undefined,
  renderIconLeft: undefined,
  renderIconRight: undefined,
};

export default class ActionButton extends React.Component {

  renderIcon(renderIcon) {
    const { isDisabled } = this.props;
    return (
      <ActionableIconWrapper>
        <ActionableIcon
          color={BINARY_COLOR_BLUE_40}
          isDisabled={isDisabled}
          renderIcon={renderIcon}
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
      renderIconLeft,
      renderIconRight,
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
          {renderIconLeft ? this.renderIcon(renderIconLeft) : null}
          {children}
          {renderIconRight ? this.renderIcon(renderIconRight) : null}
        </ActionButtonWrapper>
      </ActionButtonStyled>
    );
  }
}

ActionButton.propTypes = propTypes;
ActionButton.defaultProps = defaultProps;
