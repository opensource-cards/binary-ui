import {
  FONT_FAMILY_MAIN,
} from 'binary-ui-styles';
import styled from 'styled-components/native';
import { INFO, CONFIRM, PRIORITY, CRITICAL } from '../../constants/alert-types';

const ALERT_TEXT_COMMON_STYLES = `
  font-family: ${FONT_FAMILY_MAIN};
  font-size: 14;
  font-weight: 400;
  padding-left: 15;
`;

export const ALERT_STYLE = `
  color: #FFFFFF;
`;

export const ALERT_STYLE_CONFIRM = `
  color: #FFFFFF;
`;

export const ALERT_STYLE_PRIORITY = `
  color: #000000;
`;

export const ALERT_STYLE_CRITICAL = `
  color: #FFFFFF;
`;


export default styled.Text`
  ${props => {
    switch (props.alertType) {
      case INFO:
        return `${ALERT_TEXT_COMMON_STYLES}${ALERT_STYLE}`;
      case CONFIRM:
        return `${ALERT_TEXT_COMMON_STYLES}${ALERT_STYLE_CONFIRM}`;
      case PRIORITY:
        return `${ALERT_TEXT_COMMON_STYLES}${ALERT_STYLE_PRIORITY}`;
      case CRITICAL:
        return `${ALERT_TEXT_COMMON_STYLES}${ALERT_STYLE_CRITICAL}`;
      default:
        return `${ALERT_TEXT_COMMON_STYLES}${ALERT_STYLE}`;
    }
  }}
`;
