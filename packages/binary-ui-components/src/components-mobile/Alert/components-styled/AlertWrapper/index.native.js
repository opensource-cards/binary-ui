import styled from 'styled-components';
import { CONFIRM, PRIORITY, CRITICAL } from '../../constants/alert-types';

export default styled.View`
  border-radius: 5;
  flex-direction: row;
  justify-content: center;
  margin-top: 3px;
  padding: 0 5px;
  elevation: 1;
  align-self: center;

  ${props => {
    switch (props.alertType) {
      case CONFIRM:
        return `background-color: ${props.theme.colorBlue40};`;
      case PRIORITY:
        return `background-color: ${props.theme.colorYellow50};`;
      case CRITICAL:
        return `background-color: ${props.theme.colorRed40};`;
      default:
        return `background-color: ${props.theme.colorBlue40};`;
    }
  }};
`;
