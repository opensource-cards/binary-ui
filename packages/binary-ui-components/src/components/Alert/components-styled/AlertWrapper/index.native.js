import {
  BINARY_COLOR_BLUE_40,
  BINARY_COLOR_RED_40,
  BINARY_COLOR_GRAY_40,
  BINARY_COLOR_YELLOW_50,
} from 'binary-ui-styles';
import styled from 'styled-components/native';
import { INFO, CONFIRM, PRIORITY, CRITICAL } from '../../constants/alert-types';

export default styled.View.attrs({
  shadowOffset: () => ({ width: 0, height: 1 }),
})`
  border-top-left-radius: 5;
  border-top-right-radius: 5;
  height: 40px;
  justify-content: center;
  margin-top: 3px;
  width: 100%;
  shadow-color: #000;
  shadow-opacity: 0.1;
  shadow-radius: 2;
  elevation: 1;
  ${props => {
    switch (props.alertType) {
      case INFO:
        return `background-color: ${BINARY_COLOR_GRAY_40};`;
      case CONFIRM:
        return `background-color: ${BINARY_COLOR_BLUE_40};`;
      case PRIORITY:
        return `background-color: ${BINARY_COLOR_YELLOW_50};`;
      case CRITICAL:
        return `background-color: ${BINARY_COLOR_RED_40};`;
      default:
        return `background-color: ${BINARY_COLOR_GRAY_40};`;
    }
  }}
`;
