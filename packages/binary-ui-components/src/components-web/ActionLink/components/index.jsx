import PropTypes from 'prop-types';
import React from 'react';
import ActionLinkWrapper from '../components-styled/ActionLinkWrapper';
import ActionableText from '../../ActionableText';
import ActionableIconLeft from '../../ActionableIconLeft';
import ActionableIconRight from '../../ActionableIconRight';
import TouchableOpacity from '../../../components/TouchableOpacity';
import { OPACITY_ACTIVE, getOpacity } from '../../../utils/styles-api';

const propTypes = {
  children: PropTypes.any,
  href: PropTypes.string,
  isDisabled: PropTypes.bool,
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
  renderIconLeft: undefined,
  renderIconRight: undefined,
  onClick: undefined,
  onMouseDown: undefined,
  onSubmit: undefined,
  onTouchStart: undefined,
};

class ActionLink extends React.Component {

  renderIconLeft(renderIcon) {
    const { isDisabled } = this.props;
    return (
      <ActionableIconLeft>
        {renderIcon({ color: '#000000', opacity: getOpacity(isDisabled) })}
      </ActionableIconLeft>
    );
  }

  renderIconRight(renderIcon) {
    const { isDisabled } = this.props;
    return (
      <ActionableIconRight>
        {renderIcon({ color: '#000000', opacity: getOpacity(isDisabled) })}
      </ActionableIconRight>
    );
  }

  renderContent({ children, href, isDisabled, renderIconLeft, renderIconRight }) {
    return (
      <ActionLinkWrapper href={href} >
        {renderIconLeft ? this.renderIconLeft(renderIconLeft) : null}
        <ActionableText isDisabled={isDisabled} >
          {children}
        </ActionableText>
        {renderIconRight ? this.renderIconRight(renderIconRight) : null}
      </ActionLinkWrapper>
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

ActionLink.propTypes = propTypes;
ActionLink.defaultProps = defaultProps;

export default ActionLink;
