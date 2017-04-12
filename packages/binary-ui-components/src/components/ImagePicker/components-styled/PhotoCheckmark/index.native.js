import styled from 'styled-components/native';
import { BACKGROUND_IMAGE_URL, PHOTO_SIZE, PHOTO_CHECKMARK_SIZE } from '../../utils/styles-photo';
import React from 'react';
const StyledImage = styled.Image`
  /*
  background-image: url(${BACKGROUND_IMAGE_URL});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  */
  height: ${PHOTO_CHECKMARK_SIZE};
  left: ${(PHOTO_SIZE - PHOTO_CHECKMARK_SIZE) / 2};
  position: relative;
  top: ${(PHOTO_SIZE - PHOTO_CHECKMARK_SIZE) / 2};
  width: ${PHOTO_CHECKMARK_SIZE};
`;

export default ({ ...props }) => (
  <StyledImage source={{ uri: BACKGROUND_IMAGE_URL }} {...props} />
);
