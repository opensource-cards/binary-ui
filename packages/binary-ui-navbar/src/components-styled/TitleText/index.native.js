import { FONT_FAMILY_MAIN_500 } from 'binary-ui-styles';
import styled from 'styled-components';

export default styled.Text.attrs({
  editable: false,
  numberOfLines: 1,
})`
  align-items: center;
  color: black;
  flex-direction: row;
  font-family: ${FONT_FAMILY_MAIN_500};
  font-size: 16;
  justify-content: flex-start;
`;
