import { TRANSITION_COMPONENT_STATE } from 'binary-ui-styles';
import styled from 'styled-components';

export default styled.div.attrs({
  style: (props) => (props.isChecked
    ? { borderColor: props.theme.colorBlue40, left: '22px' }
    : { borderColor: props.theme.colorGray80, left: 0 }
  ),
})`
  background-color: #ffffff;
  border-radius: 100%;
  border-width: 1px;
  border-style: solid;
  box-sizing: border-box;
  height: ${props => props.theme.sizeListItemHeight / 2}px;
  position: absolute;
  top: 0px;
  transition: ${TRANSITION_COMPONENT_STATE};
  width: ${props => props.theme.sizeListItemHeight / 2}px;
`;
