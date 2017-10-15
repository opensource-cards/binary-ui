import PropTypes from 'prop-types';
import React from 'react';
import ActionableIconWrapper from '../components-styled/ActionableIconWrapper';
import ActionLinkRender from '../components-styled/ActionLinkRender';
import ActionableText from '../../ActionableText';
import TouchableOpacity from '../../../components/TouchableOpacity';
import { getActionOpacityExt } from '../../../utils/styles-api';

const propTypes = {
  children: PropTypes.any,
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
  isDisabled: false,
  renderIconLeft: undefined,
  renderIconRight: undefined,
  onClick: undefined,
  onMouseDown: undefined,
  onSubmit: undefined,
  onTouchStart: undefined,
};

export default class ActionLink extends React.Component {

  renderIcon(renderIcon) {
    const { isDisabled } = this.props;
    return (
      <ActionableIconWrapper>
        {renderIcon({ color: '#000000', opacity: getActionOpacityExt(false, isDisabled) })}
      </ActionableIconWrapper>
    );
  }

  render() {
    const {
      children,
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
        activeOpacity={!isDisabled ? 0.2 : 1}
        onClick={!isDisabled ? onClick : (e) => { e.preventDefault(); }}
        onMouseDown={!isDisabled ? onMouseDown : undefined}
        onSubmit={!isDisabled ? onSubmit : undefined}
        onTouchStart={!isDisabled ? onTouchStart : undefined}
        {...props}
      >
        <ActionLinkRender {...props} >
          {renderIconLeft ? this.renderIcon(renderIconLeft) : null}
          <ActionableText isDisabled={isDisabled} >
            {children}
          </ActionableText>
          {renderIconRight ? this.renderIcon(renderIconRight) : null}
        </ActionLinkRender>
      </TouchableOpacity>
    );
  }
}

ActionLink.propTypes = propTypes;
ActionLink.defaultProps = defaultProps;
