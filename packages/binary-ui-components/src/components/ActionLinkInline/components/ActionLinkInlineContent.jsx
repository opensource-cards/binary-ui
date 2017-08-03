import { BINARY_COLOR_BLUE_40 } from 'binary-ui-styles';
import PropTypes from 'prop-types';
import React from 'react';
import ActionListItemIconRender from '../components-styled/ActionListItemIconRender';
import ActionableIconWrapper from '../components-styled/ActionableIconWrapper';
import ActionableIcon from '../../ActionableIcon';
import ActionableText from '../../ActionableText';

const propTypes = {
  children: PropTypes.any,
  isActive: PropTypes.bool,
  isDisabled: PropTypes.bool.isRequired,
  size: PropTypes.number,
  renderIconLeft: PropTypes.func,
  renderIconRight: PropTypes.func,
};

const defaultProps = {
  children: undefined,
  isActive: false,
  size: undefined,
  renderIconLeft: undefined,
  renderIconRight: undefined,
};

export default class ActionLinkInlineContent extends React.Component {
  renderIcon(renderIcon) {
    const { isActive, isDisabled, size } = this.props;
    return (
      <ActionableIconWrapper>
        <ActionableIcon
          color={BINARY_COLOR_BLUE_40}
          isActive={isActive}
          isDisabled={isDisabled}
          size={size}
          renderIcon={renderIcon}
        />
      </ActionableIconWrapper>
    );
  }

  render() {
    const {
      children,
      isActive,
      isDisabled,
      renderIconLeft,
      renderIconRight,
      ...props,
    } = this.props;
    return (
      <ActionListItemIconRender isDisabled={isDisabled} {...props} >
        {renderIconLeft ? this.renderIcon(renderIconLeft) : null}
        <ActionableText
          color={BINARY_COLOR_BLUE_40}
          isActive={isActive}
          isDisabled={isDisabled}
        >
          {children}
        </ActionableText>
        {renderIconRight ? this.renderIcon(renderIconRight) : null}
      </ActionListItemIconRender>
    );
  }
}

ActionLinkInlineContent.propTypes = propTypes;
ActionLinkInlineContent.defaultProps = defaultProps;
