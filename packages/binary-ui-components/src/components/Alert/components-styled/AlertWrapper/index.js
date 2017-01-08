import { NO_SELECT_CSS } from 'binary-ui-styles/web';
import styled from 'styled-components';
import { INFO, CONFIRM, CRITICAL } from '../../constants/alert-types';

const ALERT_COMMON_STYLES = `
  height: 40px;
  width: 100%;
  line-height: 40px;
  backdrop-filter: saturate(180%) blur(20px);
  transition: background-color 0.5s ease-in-out;
`;

export const ALERT_STYLE = `
  background-color: rgba(110, 110, 110, 0.8);
`;

export const ALERT_STYLE_CONFIRM = `
  background-color: rgba(0, 158, 107, 0.8);
`;

export const ALERT_STYLE_CRITICAL = `
  background-color: rgba(196, 3, 51, 0.8);
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
