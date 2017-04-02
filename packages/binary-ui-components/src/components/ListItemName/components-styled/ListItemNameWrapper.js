import styled from 'styled-components';
import { CURSOR_POINTER_CSS, EDIT_CSS, NO_EDIT_CSS } from '../../../utils/styles';
import { HIGHLIGHT_CSS } from '../../../utils/styles.universal';

const LIST_ITEM_NAME_IS_EDIT = `
  ${EDIT_CSS}
  &:active {
    ${HIGHLIGHT_CSS}
  }
`;

export default styled.div`
  ${NO_EDIT_CSS}
  ${CURSOR_POINTER_CSS}
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-grow: 0;
  flex-shrink: 0;
  height: 100%;
  justify-content: space-between;
  text-align: left;
  width: 35%;
  ${props => (props.isFull ? 'width: 100%;' : '')}
  ${props => (props.isEdit ? LIST_ITEM_NAME_IS_EDIT : '')}
`;
