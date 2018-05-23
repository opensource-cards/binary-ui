import styled from 'styled-components';
import { CONFIRM, PRIORITY, CRITICAL } from '../../constants/alert-types';

export default styled.View`
  align-self: center;
  border-radius: 5;
  elevation: 1;
  flex-direction: row;
  justify-content: center;
  margin-top: 3px;
  padding: 0 5px;
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
