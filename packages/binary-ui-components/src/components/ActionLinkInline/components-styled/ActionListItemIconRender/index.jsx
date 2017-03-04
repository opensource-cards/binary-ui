import { BINARY_COLOR_BLUE_40 } from 'binary-ui-styles';
import styled from 'styled-components';
import NATIVE_AND_WEB_STYLE from './style';

export default styled.a`
  ${NATIVE_AND_WEB_STYLE}
  color: ${BINARY_COLOR_BLUE_40};
  text-decoration: none;
  display: flex;
  ${(props) => (
    (!props.isDisabled) ? `
      &:hover {
        text-decoration: underline;
      }
    ` : 'cursor: default;'
  )}
`;
