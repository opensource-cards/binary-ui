import { FONT_FAMILY_MAIN_400 } from 'binary-ui-styles';
import styled from 'styled-components/native';
import { INFO, CONFIRM, PRIORITY, CRITICAL } from '../../constants/alert-types';

export default styled.Text`
  font-family: ${FONT_FAMILY_MAIN_400};
  font-size: 14;
  padding-left: 15;
  ${props => {
    switch (props.alertType) {
      case INFO:
        return 'color: #FFFFFF;';
      case CONFIRM:
        return 'color: #FFFFFF;';
      case PRIORITY:
        return 'color: #000000;';
      case CRITICAL:
        return 'color: #FFFFFF;';
      default:
        return 'color: #FFFFFF;';
    }
  }}
`;
