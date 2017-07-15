import { FONT_FAMILY_MAIN } from 'binary-ui-styles/web';
import { BINARY_COLOR_GRAY_30 } from 'binary-ui-styles';
import styled from 'styled-components';

export default styled.div`
  background-color: ${BINARY_COLOR_GRAY_30};
  border-radius: 6px;
  box-shadow: 0px 0px 3px 0px rgba(128,128,128,0.5);
  color: #fff;
  cursor: default;
  font-family: ${FONT_FAMILY_MAIN};
  font-size: 13px;
  ${props => (props.placement ? 'right: 0;' : 'left: 0;')}
  padding: 5px 10px;
  position: absolute;
  text-align: center;
  top: 100%;
  visibility: visible; /* TOGGLE THIS TO hidden */
  width: auto;
  white-space: nowrap;
  user-select: none;
  z-index: 999;
  -webkit-font-smoothing: antialiased;
  &::after {
    border-width: 5px;
    border-style: solid;
    border-color: transparent transparent ${BINARY_COLOR_GRAY_30} transparent;
    bottom: 100%;
    content: "";
    ${props => (props.placement ? 'right: 20px;' : 'left: 20px;')} /* need to think about other cases  */
    position: absolute;
    margin-left: -5px;
  }
`;
