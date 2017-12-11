import { BINARY_COLOR_BLUE_40, OPACITY_ACTIVE, getOpacity } from 'binary-ui-styles';
import PropTypes from 'prop-types';
import React from 'react';
import ActionLinkInlineWrapper from '../components-styled/ActionLinkInlineWrapper';
import ActionableText from '../../ActionableText';
import ActionableIconLeft from '../../ActionableIconLeft';
import ActionableIconRight from '../../ActionableIconRight';
import TouchableOpacity from '../../../components/TouchableOpacity';

const propTypes = {
  children: PropTypes.any,
  href: PropTypes.string,
  isDisabled: PropTypes.bool,
  size: PropTypes.number,
  renderIconLeft: PropTypes.func,
  renderIconRight: PropTypes.func,
  onClick: PropTypes.func,
  onMouseDown: PropTypes.func,
  onSubmit: PropTypes.func,
  onTouchStart: PropTypes.func,
};

const defaultProps = {
  children: undefined,
  href: undefined,
  isDisabled: false,
  size: undefined,
  renderIconLeft: undefined,
  renderIconRight: undefined,
  onClick: undefined,
  onMouseDown: undefined,
  onSubmit: undefined,
  onTouchStart: undefined,
};

class ActionLinkInline extends React.Component {

  renderIconLeft(renderIcon) {
    const { isDisabled, size } = this.props;
    return (
      <ActionableIconLeft>
        {renderIcon({
          color: BINARY_COLOR_BLUE_40,
          opacity: getOpacity(isDisabled),
          size,
        })}
      </ActionableIconLeft>
    );
  }

  renderIconRight(renderIcon) {
    const { isDisabled, size } = this.props;
    return (
      <ActionableIconRight>
        {renderIcon({
          color: BINARY_COLOR_BLUE_40,
          opacity: getOpacity(isDisabled),
          size,
        })}
      </ActionableIconRight>
    );
  }

  renderContent({ children, href, isDisabled, renderIconLeft, renderIconRight }) {
    return (
      <ActionLinkInlineWrapper href={href} isDisabled={isDisabled}>
        {renderIconLeft ? this.renderIconLeft(renderIconLeft) : null}
        <ActionableText color={BINARY_COLOR_BLUE_40} isDisabled={isDisabled} >
          {children}
        </ActionableText>
        {renderIconRight ? this.renderIconRight(renderIconRight) : null}
      </ActionLinkInlineWrapper>
    );
  }

  render() {
    const {
      children,
      href,
      isDisabled,
      renderIconLeft,
      renderIconRight,
      onClick,
      onMouseDown,
      onSubmit,
      onTouchStart,
      ...props,
    } = this.props;
    return isDisabled ? (
      <div onClick={(e) => { e.preventDefault(); }} {...props} >
        {this.renderContent({ children, href, isDisabled, renderIconLeft, renderIconRight })}
      </div>
    ) : (
      <TouchableOpacity
        activeOpacity={OPACITY_ACTIVE}
        onClick={onClick}
        onMouseDown={onMouseDown}
        onSubmit={onSubmit}
        onTouchStart={onTouchStart}
        {...props}
      >
        {this.renderContent({ children, href, isDisabled, renderIconLeft, renderIconRight })}
      </TouchableOpacity>
    );
  }
}

ActionLinkInline.propTypes = propTypes;
ActionLinkInline.defaultProps = defaultProps;

export default ActionLinkInline;
