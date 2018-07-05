import { getHighlightEditStyle } from 'binary-ui-styles';
import styled from 'styled-components';

export default styled.View`
  align-items: center;
  background-color: ${props => props.styleBackgroundColor};
  flex-direction: row;
  height: ${props => props.theme.sizeListItemHeight};
  justify-content: space-between;
  overflow: hidden;
  width: 100%;
  ${props => getHighlightEditStyle(props.isEdit, props.isValid, false)}
`;
