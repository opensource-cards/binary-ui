import React from 'react';
import styled from 'styled-components/native';
import {
  CARDS_ICON_STYLE_NATIVE,
  CARDS_ICON_STYLE_ACTIVE_EXT_EXT,
  CARDS_ICON_STYLE_HOVER_EXT_EXT,
  CARDS_ICON_STYLE_DISABLED_EXT_EXT,
} from '../../../utils/styles';

// NOTE: does not work because of 'styled-components/native' bug
const ActionButtonStyled = styled.Text`
  ${CARDS_ICON_STYLE_NATIVE}
  ${props => {
    if (props.isDisabled) {
      return CARDS_ICON_STYLE_DISABLED_EXT_EXT;
    }
    if (props.isActive) {
      return CARDS_ICON_STYLE_ACTIVE_EXT_EXT;
    }
    if (props.isHover) {
      return CARDS_ICON_STYLE_HOVER_EXT_EXT;
    }
    return '';
  }
  }
`;

const propTypes = {
  isDisabled: React.PropTypes.bool,
};

const defaultProps = {
  isDisabled: false,
};

// TODO: implement activity
const ActionableIcon = ({ isDisabled, ...props }) => (
  <ActionButtonStyled isDisabled={isDisabled} {...props} />
);

ActionableIcon.propTypes = propTypes;
ActionableIcon.defaultProps = defaultProps;

export default ActionableIcon;
