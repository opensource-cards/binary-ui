import styled from 'styled-components';
import { BACKGROUND_IMAGE_URL, PHOTO_SIZE, PHOTO_CHECKMARK_SIZE } from '../../utils/styles-photo';

export default styled.div`
  background-image: url(${BACKGROUND_IMAGE_URL});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: ${PHOTO_CHECKMARK_SIZE}px;
  left: ${(PHOTO_SIZE - PHOTO_CHECKMARK_SIZE) / 2}px;
  position: relative;
  top: ${(PHOTO_SIZE - PHOTO_CHECKMARK_SIZE) / 2}px;
  width: ${PHOTO_CHECKMARK_SIZE}px;
`;
