import styled from 'styled-components';
import {
  PHOTO_SIZE,
  UNDERLINE_BORDER_STANDARD_WEB,
  UNDERLINE_BORDER_ACTIVE_WEB,
} from '../../utils/styles-photo';

export default styled.div`
  border-radius: ${PHOTO_SIZE / 2}px;
  ${UNDERLINE_BORDER_STANDARD_WEB}
  background-image: url(${(props) => props.url});
  background-position: center;
  background-repeat: no-repeat;
  background-size: ${(props) => props.photoFit};
  height: ${PHOTO_SIZE}px;
  margin: 5px;
  width: ${PHOTO_SIZE}px;

  &:active {
    ${UNDERLINE_BORDER_ACTIVE_WEB}
    /* opacity: 0.5; */
  }

  &:hover {
    ${UNDERLINE_BORDER_ACTIVE_WEB}
  }
`;
