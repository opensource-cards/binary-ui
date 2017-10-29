import { BINARY_COLOR_BLUE_40 } from 'binary-ui-styles';
import PropTypes from 'prop-types';
import React from 'react';
import ActionListItemIconRender from '../components-styled/ActionListItemIconRender';
import ActionableText from '../../ActionableText';
import ActionableIconLeft from '../../ActionableIconLeft';
import ActionableIconRight from '../../ActionableIconRight';
import TouchableOpacity from '../../../components/TouchableOpacity';
import { OPACITY_ACTIVE, getOpacity } from '../../../utils/styles-api';

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
        activeOpacity={!isDisabled ? OPACITY_ACTIVE : 1}
        onClick={!isDisabled ? onClick : (e) => { e.preventDefault(); }}
        onMouseDown={!isDisabled ? onMouseDown : undefined}
        onSubmit={!isDisabled ? onSubmit : undefined}
        onTouchStart={!isDisabled ? onTouchStart : undefined}
        {...props}
      >
        <ActionListItemIconRender isDisabled={isDisabled}>
          {renderIconLeft ? this.renderIconLeft(renderIconLeft) : null}
          <ActionableText color={BINARY_COLOR_BLUE_40} isDisabled={isDisabled} >
            {children}
          </ActionableText>
          {renderIconRight ? this.renderIconRight(renderIconRight) : null}
        </ActionListItemIconRender>
      </TouchableOpacity>
    );
  }
}

ActionLinkInline.propTypes = propTypes;
ActionLinkInline.defaultProps = defaultProps;
