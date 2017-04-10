import React from 'react';
import styled from 'styled-components/native';
import {
  CARDS_ICON_CSS,
} from '../../../../utils/styles';
import {
  CARDS_ICON_ACTIVE_CSS,
  CARDS_ICON_HOVER_CSS,
  CARDS_ICON_DISABLED_CSS,
} from '../../../../utils/styles.universal';

// NOTE: does not work because of 'styled-components/native' bug
const ActionButtonStyled = styled.Text`
  ${CARDS_ICON_CSS}
  ${props => {
    if (props.isDisabled) {
      return CARDS_ICON_DISABLED_CSS;
    }
    if (props.isActive) {
      return CARDS_ICON_ACTIVE_CSS;
    }
    if (props.isHover) {
      return CARDS_ICON_HOVER_CSS;
    }
    return '';
  }}
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
