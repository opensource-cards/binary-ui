import { BINARY_COLOR_GREEN_30, BINARY_COLOR_RED_40, BINARY_COLOR_GRAY_40 } from 'binary-ui-styles';
import { CURSOR_POINTER_CSS } from '../../../../utils/styles';
import { NO_SELECT_CSS } from 'binary-ui-styles/web';
import styled from 'styled-components';
import { INFO, CONFIRM, CRITICAL } from '../../constants/alert-types';

const ALERT_COMMON_STYLES = `
  ${CURSOR_POINTER_CSS}
  height: 40px;
  width: 100%;
  line-height: 40px;
  transition: background-color 0.5s ease-in-out;
  border-radius: 3px;
`;

export const ALERT_STYLE = `
  background-color: ${BINARY_COLOR_GRAY_40};
`;

export const ALERT_STYLE_CONFIRM = `
  background-color: ${BINARY_COLOR_GREEN_30};
`;

export const ALERT_STYLE_CRITICAL = `
  background-color: ${BINARY_COLOR_RED_40};
`;

export default styled.div`
  ${props => {
    switch (props.type) {
      case INFO:
        return `${NO_SELECT_CSS}${ALERT_COMMON_STYLES}${ALERT_STYLE}`;
      case CONFIRM:
        return `${NO_SELECT_CSS}${ALERT_COMMON_STYLES}${ALERT_STYLE_CONFIRM}`;
      case CRITICAL:
        return `${NO_SELECT_CSS}${ALERT_COMMON_STYLES}${ALERT_STYLE_CRITICAL}`;
      default:
        return `${NO_SELECT_CSS}${ALERT_COMMON_STYLES}${ALERT_STYLE}`;
    }
  }}
`;
