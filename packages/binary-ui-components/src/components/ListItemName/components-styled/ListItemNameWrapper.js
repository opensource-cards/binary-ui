import styled from 'styled-components';
import {
  CURSOR_POINTER_STYLE_EXT,
  NO_EDIT_STYLE_WEB,
  EDIT_STYLE_WEB,
  HIGHTLIGHT_STYLE_EXT,
} from '../../../utils/styles';

const LIST_ITEM_NAME_IS_EDIT = `
  ${EDIT_STYLE_WEB}
  &:active {
    ${HIGHTLIGHT_STYLE_EXT}
  }
`;

export default styled.div`
  ${NO_EDIT_STYLE_WEB}
  ${CURSOR_POINTER_STYLE_EXT}
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
