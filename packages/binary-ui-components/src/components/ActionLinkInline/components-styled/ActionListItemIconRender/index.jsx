import { CARDS_BLUE_COLOR } from 'binary-ui-styles';
import styled from 'styled-components';
import NATIVE_AND_WEB_STYLE from './style';

export default styled.a`
  ${NATIVE_AND_WEB_STYLE}
  color: ${CARDS_BLUE_COLOR};
  text-decoration: none;
  display: flex;
  &:hover {
    text-decoration: underline;
  }
`;
