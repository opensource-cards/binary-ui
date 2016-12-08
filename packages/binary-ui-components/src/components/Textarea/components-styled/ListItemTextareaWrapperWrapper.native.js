import styled from 'styled-components/native';
import { getHighlightEditStyle } from '../../../utils/styles-api';

export default styled.View`
  ${props => getHighlightEditStyle(
    true,
    props.isValid,
    props.isTypingHighlight
  )}
  background-color: white;
  padding-top: 20;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;
