import { TRANSITION_COMPONENT_STATE } from 'binary-ui-styles';
import styled from 'styled-components';

export default styled.div.attrs({
  style: (props) => (props.isChecked
    ? { backgroundColor: props.theme.colorBlue40 }
    : { backgroundColor: props.theme.colorGray80 }
  ),
})`
  border-radius: ${props => props.theme.sizeListItemHeight / 2}px;
  height: ${props => props.theme.sizeListItemHeight / 2}px;
  position: absolute;
  top: 0px;
  transition: ${TRANSITION_COMPONENT_STATE};
  width: ${props => props.theme.sizeListItemHeight}px;
`;
