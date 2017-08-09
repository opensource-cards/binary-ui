import styled from 'styled-components';
import { PHOTO_SIZE } from '../../utils/styles-photo.native-and-web';

export default styled.div`
  border-radius: ${PHOTO_SIZE / 2}px;
  background-image: url(${(props) => props.imageUrl});
  background-position: center;
  background-repeat: no-repeat;
  background-size: ${(props) => props.imageFit};
  box-shadow: 0 0px 3px rgba(0,0,0,0.1);
  height: ${PHOTO_SIZE}px;
  margin: 5px;
  width: ${PHOTO_SIZE}px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:active {
    opacity: 0.5;
  }
`;
