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

export default class ActionLink extends React.Component {

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
    return (
      <TouchableOpacity
        activeOpacity={!isDisabled ? OPACITY_ACTIVE : 1}
        onClick={!isDisabled ? onClick : (e) => { e.preventDefault(); }}
        onMouseDown={!isDisabled ? onMouseDown : undefined}
        onSubmit={!isDisabled ? onSubmit : undefined}
        onTouchStart={!isDisabled ? onTouchStart : undefined}
        {...props}
      >
        <ActionLinkWrapper href={href} >
          {renderIconLeft ? this.renderIconLeft(renderIconLeft) : null}
          <ActionableText isDisabled={isDisabled} >
            {children}
          </ActionableText>
          {renderIconRight ? this.renderIconRight(renderIconRight) : null}
        </ActionLinkWrapper>
      </TouchableOpacity>
    );
  }
}

ActionLink.propTypes = propTypes;
ActionLink.defaultProps = defaultProps;
