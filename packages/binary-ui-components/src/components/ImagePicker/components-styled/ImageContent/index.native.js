import styled from 'styled-components/native';
import { PHOTO_SIZE } from '../../utils/styles-photo.native-and-web';

export default styled.Image`
  border-radius: ${PHOTO_SIZE / 2}px;
  height: ${PHOTO_SIZE}px;
  margin: 5px;
  width: ${PHOTO_SIZE}px;
  background-color: transparent;
  align-items: center;
  justify-content: center;
`;