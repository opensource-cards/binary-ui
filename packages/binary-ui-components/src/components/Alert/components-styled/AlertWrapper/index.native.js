import styled from 'styled-components/native';
import { INFO, CONFIRM, CRITICAL } from '../../constants/alert-types';

// TODO: fix text positioning
const ALERT_COMMON_STYLES = `
  height: 40;
`;

/*
line-height: 40;
backdrop-filter: saturate(180%) blur(20px);
transition: background-color 0.5s ease-in-out;
*/

export const ALERT_STYLE = `
  background-color: rgba(110, 110, 110, 0.8);
`;

export const ALERT_STYLE_CONFIRM = `
  background-color: rgba(0, 158, 107, 0.8);
`;

export const ALERT_STYLE_CRITICAL = `
  background-color: rgba(196, 3, 51, 0.8);
`;

// NOTE: does not work because of 'styled-components/native' bug
export default styled.View`
  ${props => {
    switch (props.type) {
      case INFO:
        return `${ALERT_COMMON_STYLES}${ALERT_STYLE}`;
      case CONFIRM:
        return `${ALERT_COMMON_STYLES}${ALERT_STYLE_CONFIRM}`;
      case CRITICAL:
        return `${ALERT_COMMON_STYLES}${ALERT_STYLE_CRITICAL}`;
      default:
        return `${ALERT_COMMON_STYLES}${ALERT_STYLE}`;
    }
  }}
`;
