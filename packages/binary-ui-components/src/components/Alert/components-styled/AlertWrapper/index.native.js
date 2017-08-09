import {
  BINARY_COLOR_BLUE_40,
  BINARY_COLOR_RED_40,
  BINARY_COLOR_GRAY_40,
  BINARY_COLOR_YELLOW_50,
} from 'binary-ui-styles';
import styled from 'styled-components/native';
import { INFO, CONFIRM, PRIORITY, CRITICAL } from '../../constants/alert-types';

const ALERT_COMMON_STYLES = `
  border-top-left-radius: 5;
  border-top-right-radius: 5;
  height: 40px;
  margin-top: 3px;
  justify-content: center;
  width: 100%;
  shadow-color: #000;
  shadow-offset: {width: 0, height: 1};
  shadow-opacity: 0.1;
  shadow-radius: 2;
  elevation: 1;
`;

export const ALERT_STYLE = `
  background-color: ${BINARY_COLOR_GRAY_40};
`;

export const ALERT_STYLE_CONFIRM = `
  background-color: ${BINARY_COLOR_BLUE_40};
`;

export const ALERT_STYLE_PRIORITY = `
  background-color: ${BINARY_COLOR_YELLOW_50};
`;

export const ALERT_STYLE_CRITICAL = `
  background-color: ${BINARY_COLOR_RED_40};
`;

export default styled.View`
  ${props => {
    switch (props.alertType) {
      case INFO:
        return `${ALERT_COMMON_STYLES}${ALERT_STYLE}`;
      case CONFIRM:
        return `${ALERT_COMMON_STYLES}${ALERT_STYLE_CONFIRM}`;
      case PRIORITY:
        return `${ALERT_COMMON_STYLES}${ALERT_STYLE_PRIORITY}`;
      case CRITICAL:
        return `${ALERT_COMMON_STYLES}${ALERT_STYLE_CRITICAL}`;
      default:
        return `${ALERT_COMMON_STYLES}${ALERT_STYLE}`;
    }
  }}
`;
