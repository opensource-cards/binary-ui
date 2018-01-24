import {
  BINARY_COLOR_BLUE_40,
  BINARY_COLOR_RED_40,
  BINARY_COLOR_YELLOW_50,
} from 'binary-ui-styles';
import styled from 'styled-components/native';
import { CONFIRM, PRIORITY, CRITICAL } from '../../constants/alert-types';

export default styled.View.attrs({
  style: () => ({
    shadowOffset: { width: 0, height: 1 },
  }),
})`
  border-radius: 5;
  flex-direction: row;
  justify-content: center;
  shadow-color: #000;
  shadow-opacity: 0.1;
  shadow-radius: 2;
  margin-top: 3px;
  padding: 0 5px;
  elevation: 1;
  align-self: center;

  ${props => {
    switch (props.alertType) {
      case CONFIRM:
        return `background-color: ${BINARY_COLOR_BLUE_40};`;
      case PRIORITY:
        return `background-color: ${BINARY_COLOR_YELLOW_50};`;
      case CRITICAL:
        return `background-color: ${BINARY_COLOR_RED_40};`;
      default:
        return `background-color: ${BINARY_COLOR_BLUE_40};`;
    }
  }};
`;
