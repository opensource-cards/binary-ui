import React from 'react';
import styled from 'styled-components/native';
import {
  CARDS_BUTTON_CSS,
} from '../../../../utils/styles';
import {
  CARDS_ICON_ACTIVE_CSS,
  CARDS_ICON_HOVER_CSS,
  CARDS_ICON_DISABLED_CSS,
} from '../../../../utils/styles.universal';

export const RESET_BUTTON_CSS = `
  color: inherit;
  padding: 0;
`;

/*
  background: none;
  border: 0;
  box-sizing: content-box;
  font: inherit;
  line-height: normal;
  outline: 0;
*/

const StyledView = styled.View`
`;

const ActionButtonStyled = styled.TouchableOpacity`
  ${RESET_BUTTON_CSS}
  ${props => (props.isDisabled
    ? CARDS_ICON_DISABLED_CSS
    : `
      ${CARDS_BUTTON_CSS}
      ${CARDS_ICON_ACTIVE_CSS}
      ${CARDS_ICON_HOVER_CSS}
    `)
  }
`;

const propTypes = {
  onClick: React.PropTypes.func,
  children: React.PropTypes.any,
  isDisabled: React.PropTypes.bool,
};

const defaultProps = {
  isDisabled: false,
};

// TODO: make hover separetely
const ActionButton = ({ isDisabled, onClick, children, ...props }) => (
  <ActionButtonStyled disabled={isDisabled} onPress={onClick} {...props} >
    <StyledView {...props} >
      {children}
    </StyledView>
  </ActionButtonStyled>
);

ActionButton.propTypes = propTypes;
ActionButton.defaultProps = defaultProps;

export default ActionButton;
