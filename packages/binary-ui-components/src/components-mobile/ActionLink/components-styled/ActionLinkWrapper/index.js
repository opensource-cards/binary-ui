import { BINARY_COLOR_BLUE_80 } from 'binary-ui-styles';
import styled from 'styled-components';
import TouchableOpacity from '../../../../components/TouchableOpacity';

const TouchableOpacityLink = TouchableOpacity.withComponent('a');

export default styled(TouchableOpacityLink)`
  align-items: center;
  cursor: pointer;
  display: flex;
  opacity: 1;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
    text-decoration-color: ${BINARY_COLOR_BLUE_80};
    text-underline-position: under;
  }
`;
