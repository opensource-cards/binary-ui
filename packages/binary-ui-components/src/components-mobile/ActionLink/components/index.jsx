import { BINARY_COLOR_BLUE_40, OPACITY_ACTIVE } from 'binary-ui-styles';
import PropTypes from 'prop-types';
import React from 'react';
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
  onClick: PropTypes.func,
  onMouseDown: PropTypes.func,
  onSubmit: PropTypes.func,
  onTouchStart: PropTypes.func,
};

const defaultProps = {
  href: undefined,
  isDisabled: false,
  label: undefined,
  size: undefined,
  renderIconLeft: undefined,
  renderIconRight: undefined,
  onClick: undefined,
  onMouseDown: undefined,
  onSubmit: undefined,
  onTouchStart: undefined,
};

class ActionLink extends React.Component {

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
    const {
      href,
      isDisabled,
      label,
      renderIconLeft,
      renderIconRight,
      onClick,
      onMouseDown,
      onSubmit,
      onTouchStart,
      ...props,
    } = this.props;
    return isDisabled ? (
      <ActionTextWrapper
        href={href}
        onClick={(e) => { e.preventDefault(); }}
        onMouseDown={onMouseDown}
        onSubmit={onSubmit}
        onTouchStart={onTouchStart}
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
        href={href}
        onClick={onClick}
        onMouseDown={onMouseDown}
        onSubmit={onSubmit}
        onTouchStart={onTouchStart}
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
