import styled from 'styled-components/native';
import { PHOTO_SIZE } from '../../utils/styles.native-and-web';

export default styled.Image`
  border-color: #aeaeae;
  border-radius: ${PHOTO_SIZE / 2}px;
  border-width: 1px;
  height: ${PHOTO_SIZE}px;
  margin: 5px;
  width: ${PHOTO_SIZE}px;
  background-color: transparent;
  align-items: center;
  justify-content: center;
`;
