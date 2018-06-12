import { getHighlightEditStyle } from 'binary-ui-styles';
import styled from 'styled-components';

export default styled.div`
  align-items: center;
  background-color: #ffffff;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  min-height: ${props => props.theme.sizeListItemHeight}px;
  padding-left: 10px;
  ${props => getHighlightEditStyle(props.isEdit, props.isValid, false)}
`;
