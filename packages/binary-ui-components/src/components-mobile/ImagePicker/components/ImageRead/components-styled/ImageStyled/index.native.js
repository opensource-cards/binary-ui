import styled from 'styled-components';
import { PHOTO_SIZE } from '../../../../utils/styles.native-and-web';

export default styled.Image`
  border-radius: ${PHOTO_SIZE / 2}px;
  height: ${PHOTO_SIZE}px;
  position: absolute;
  width: ${PHOTO_SIZE}px;
`;
