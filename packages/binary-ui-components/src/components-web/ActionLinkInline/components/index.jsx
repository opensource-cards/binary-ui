import { BINARY_COLOR_BLUE_40 } from 'binary-ui-styles';
import PropTypes from 'prop-types';
import React from 'react';
import ActionListItemIconRender from '../components-styled/ActionListItemIconRender';
import ActionableIconWrapper from '../components-styled/ActionableIconWrapper';
import ActionableText from '../../ActionableText';
import { getActionOpacityExt } from '../../../utils/styles-api';
import TouchableOpacity from '../../../components/TouchableOpacity';

const propTypes = {
  children: PropTypes.any,
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
  isDisabled: false,
  size: undefined,
  renderIconLeft: undefined,
  renderIconRight: undefined,
  onClick: undefined,
  onMouseDown: undefined,
  onSubmit: undefined,
  onTouchStart: undefined,
};

export default class ActionLinkInline extends React.Component {

  renderIcon(renderIcon) {
    const { isDisabled, size } = this.props;
    return (
      <ActionableIconWrapper>
        {renderIcon({
          color: BINARY_COLOR_BLUE_40,
          opacity: getActionOpacityExt(false, isDisabled),
          size,
        })}
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
        <ActionListItemIconRender isDisabled={isDisabled} {...props} >
          {renderIconLeft ? this.renderIcon(renderIconLeft) : null}
          <ActionableText color={BINARY_COLOR_BLUE_40} isDisabled={isDisabled} >
            {children}
          </ActionableText>
          {renderIconRight ? this.renderIcon(renderIconRight) : null}
        </ActionListItemIconRender>
      </TouchableOpacity>
    );
  }
}

ActionLinkInline.propTypes = propTypes;
ActionLinkInline.defaultProps = defaultProps;
