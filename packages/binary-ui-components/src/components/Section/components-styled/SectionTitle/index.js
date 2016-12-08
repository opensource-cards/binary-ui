import { LIST_ITEM_HEIGHT } from 'binary-ui-styles';
import { FONT_FAMILY_MAIN } from 'binary-ui-styles/web';
import styled from 'styled-components';
import NATIVE_AND_WEB_STYLE from './style.native-and-web';

export default styled.div`
  ${NATIVE_AND_WEB_STYLE}
  font-family: ${FONT_FAMILY_MAIN};
  font-size: 12px;
  letter-spacing: 3px;
  line-height: ${LIST_ITEM_HEIGHT}px;
  padding-top: 10px;
  vertical-align: center;
`;
