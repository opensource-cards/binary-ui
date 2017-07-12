import {
  BINARY_COLOR_BLUE_40,
  BINARY_COLOR_RED_40,
  BINARY_COLOR_SLATE_40,
  BINARY_COLOR_SLATE_50,
  BINARY_COLOR_YELLOW_50,
} from 'binary-ui-styles';
import { CURSOR_POINTER_CSS } from '../../../../utils/styles';
import { NO_SELECT_CSS } from 'binary-ui-styles/web';
import styled from 'styled-components';
import { INFO, CONFIRM, PRIORITY, CRITICAL } from '../../constants/alert-types';

const ALERT_COMMON_STYLES = `
  ${CURSOR_POINTER_CSS}
  height: 40px;
  width: 98%;
  line-height: 40px;
  transition: background-color 0.5s ease-in-out;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  margin: 3px auto 0 auto;
  box-shadow: 0px 0px 3px 0px rgba(128,128,128,0.5);
`;

export const ALERT_STYLE = `
  background: ${BINARY_COLOR_SLATE_40};
  color: white;
`;

export const ALERT_STYLE_CONFIRM = `
  background: ${BINARY_COLOR_BLUE_40};
  color: white;
`;

export const ALERT_STYLE_PRIORITY = `
  background: ${BINARY_COLOR_YELLOW_50};
  color: black;
`;

export const ALERT_STYLE_CRITICAL = `
  background: ${BINARY_COLOR_RED_40};
  color: white;
`;

export default styled.div`
  ${props => {
    switch (props.alertType) {
      case INFO:
        return `${NO_SELECT_CSS}${ALERT_COMMON_STYLES}${ALERT_STYLE}`;
      case CONFIRM:
        return `${NO_SELECT_CSS}${ALERT_COMMON_STYLES}${ALERT_STYLE_CONFIRM}`;
      case PRIORITY:
        return `${NO_SELECT_CSS}${ALERT_COMMON_STYLES}${ALERT_STYLE_PRIORITY}`;
      case CRITICAL:
        return `${NO_SELECT_CSS}${ALERT_COMMON_STYLES}${ALERT_STYLE_CRITICAL}`;
      default:
        return `${NO_SELECT_CSS}${ALERT_COMMON_STYLES}${ALERT_STYLE}`;
    }
  }}
`;
