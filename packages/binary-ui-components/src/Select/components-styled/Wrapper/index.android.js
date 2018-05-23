import { getHighlightEditStyle } from 'binary-ui-styles';
import styled from 'styled-components';

export default styled.View`
  height: 100%;
  opacity: ${props => (props.isDisabled ? props.theme.opacityDisabled : '1')};
  width: 100%;
  ${props => (
    getHighlightEditStyle(
      true,
      props.isValid,
      false,
      undefined
    )
  )}
`;
