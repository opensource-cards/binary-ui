import {
  BINARY_COLOR_BLUE_40,
  BINARY_COLOR_RED_40,
  BINARY_COLOR_GRAY_40,
  BINARY_COLOR_YELLOW_50,
  NO_SELECT_CSS,
} from 'binary-ui-styles';
import styled from 'styled-components';
import { INFO, CONFIRM, PRIORITY, CRITICAL } from '../../constants/alert-types';
import { CURSOR_POINTER_CSS } from '../../../../utils/styles';

export default styled.div`
  ${NO_SELECT_CSS}
  ${CURSOR_POINTER_CSS}
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  box-shadow: 0px 0px 3px 0px rgba(128, 128, 128, 0.5);
  height: 40px;
  line-height: 40px;
  margin: 3px auto 0 auto;
  transition: background-color 0.5s ease-in-out;
  width: 100%;
  ${props => {
    switch (props.alertType) {
      case INFO:
        return `background: ${BINARY_COLOR_GRAY_40};color: white;`;
      case CONFIRM:
        return `background: ${BINARY_COLOR_BLUE_40};color: white;`;
      case PRIORITY:
        return `background: ${BINARY_COLOR_YELLOW_50};color: black;`;
      case CRITICAL:
        return `background: ${BINARY_COLOR_RED_40};color: white;`;
      default:
        return `background: ${BINARY_COLOR_GRAY_40};color: white;`;
    }
  }}
`;
