import styled from 'styled-components';
import { getHighlightEditStyle } from '../../../utils/styles-api';

export default styled.div`
  ${props => getHighlightEditStyle(
    true,
    props.isValid,
    props.isTypingHighlight
  )}
  display: flex;
  flex-direction: row;
  align-content: center;
  align-items: center;
  background-color: white;
  padding-top: 20px;
`;
