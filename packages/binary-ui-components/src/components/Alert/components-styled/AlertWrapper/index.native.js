import { BINARY_COLOR_GREEN_30, BINARY_COLOR_RED_40, BINARY_COLOR_GRAY_40 } from 'binary-ui-styles';
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
  background-color: ${BINARY_COLOR_GRAY_40};
`;

export const ALERT_STYLE_CONFIRM = `
  background-color: ${BINARY_COLOR_GREEN_30};
`;

export const ALERT_STYLE_CRITICAL = `
  background-color: ${BINARY_COLOR_RED_40};
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
