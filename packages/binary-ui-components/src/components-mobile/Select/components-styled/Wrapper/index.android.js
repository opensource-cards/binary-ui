import { getHighlightEditStyle } from 'binary-ui-styles';
import styled from 'styled-components';

export default styled.View`
  height: 100%;
  width: 100%;
  ${getHighlightEditStyle(true, true, false, undefined)}
`;
