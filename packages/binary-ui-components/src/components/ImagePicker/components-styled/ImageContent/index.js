import styled from 'styled-components';
import { PHOTO_SIZE } from '../../utils/styles-photo.native-and-web';
import {
  UNDERLINE_BORDER_STANDARD,
  UNDERLINE_BORDER_ACTIVE,
} from '../../utils/styles-photo';

export default styled.div`
  border-radius: ${PHOTO_SIZE / 2}px;
  ${UNDERLINE_BORDER_STANDARD}
  background-image: url(${(props) => props.imageUrl});
  background-position: center;
  background-repeat: no-repeat;
  background-size: ${(props) => props.imageFit};
  height: ${PHOTO_SIZE}px;
  margin: 5px;
  width: ${PHOTO_SIZE}px;
  &:active {
    ${UNDERLINE_BORDER_ACTIVE}
  }
`;
