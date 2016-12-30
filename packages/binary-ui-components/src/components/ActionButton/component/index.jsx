import ActionableIcon from '../../ActionableIcon';
import ActionableIconWrapper from '../components-styled/ActionableIconWrapper';
import ActionButtonStyled from '../components-styled/ActionButtonStyled';
import ActionButtonWrapper from '../components-styled/ActionButtonWrapper';
import { CARDS_BLUE_COLOR } from 'binary-ui-styles';
import React from 'react';

const propTypes = {
  children: React.PropTypes.any,
  isDisabled: React.PropTypes.bool,
  style: React.PropTypes.object,
  IconComponentLeft: React.PropTypes.func,
  IconComponentRight: React.PropTypes.func,
};

const defaultProps = {};

export default class ActionButton extends React.Component {

  renderIconComponent(IconComponent) {
    const { isDisabled } = this.props;
    return (
      <ActionableIconWrapper>
        <ActionableIcon
          color={CARDS_BLUE_COLOR}
          IconComponent={IconComponent}
          isDisabled={isDisabled}
        />
      </ActionableIconWrapper>
    );
  }

  render() {
    const {
      children,
      isDisabled,
      IconComponentLeft,
      IconComponentRight,
      ...props,
    } = this.props;
    return (
        <ActionButtonStyled
          {...props}
        >
          <ActionButtonWrapper>
            {IconComponentLeft && this.renderIconComponent(IconComponentLeft)}
              {children}
            {IconComponentRight && this.renderIconComponent(IconComponentRight)}
          </ActionButtonWrapper>
        </ActionButtonStyled>
    );
  }
}

ActionButton.propTypes = propTypes;
ActionButton.defaultProps = defaultProps;
