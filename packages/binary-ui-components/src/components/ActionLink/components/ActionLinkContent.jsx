import PropTypes from 'prop-types';
import React from 'react';
import ActionableIconWrapper from '../components-styled/ActionableIconWrapper';
import ActionLinkRender from '../components-styled/ActionLinkRender';
import ActionableIcon from '../../ActionableIcon';
import ActionableText from '../../ActionableText';

const propTypes = {
  children: PropTypes.any,
  isActive: PropTypes.bool,
  isDisabled: PropTypes.bool.isRequired,
  renderIconLeft: PropTypes.func,
  renderIconRight: PropTypes.func,
};

const defaultProps = {
  children: undefined,
  isActive: false,
  renderIconLeft: undefined,
  renderIconRight: undefined,
};

export default class ActionLinkContent extends React.Component {

  renderIcon(renderIcon) {
    const { isActive, isDisabled } = this.props;
    return (
      <ActionableIconWrapper>
        <ActionableIcon isActive={isActive} isDisabled={isDisabled} renderIcon={renderIcon} />
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
      <ActionLinkRender {...props} >
        {renderIconLeft ? this.renderIcon(renderIconLeft) : null}
        <ActionableText isActive={isActive} isDisabled={isDisabled} >
          {children}
        </ActionableText>
        {renderIconRight ? this.renderIcon(renderIconRight) : null}
      </ActionLinkRender>
    );
  }
}

ActionLinkContent.propTypes = propTypes;
ActionLinkContent.defaultProps = defaultProps;
