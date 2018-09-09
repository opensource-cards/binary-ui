import styled from 'styled-components';
import { CONFIRM, PRIORITY, CRITICAL } from '../../constants/alert-types';

export default styled.Text`
  font-family: ${props => props.theme.fontFamily400};
  font-size: 14px;
  font-weight: ${props => props.theme.fontWeight400};
  padding: 5px;
  ${props => {
    switch (props.alertType) {
      case CONFIRM:
        return 'color: #ffffff;';
      case PRIORITY:
        return 'color: hsl(0, 0%, 0%);';
      case CRITICAL:
        return 'color: #ffffff;';
      default:
        return 'color: #ffffff;';
    }
  }};
`;
