import { BINARY_COLOR_SAND_90 } from 'binary-ui-styles';
import styled from 'styled-components';
import { PHOTO_SIZE } from '../../utils/styles.native-and-web';

export default styled.div`
  align-items: center;
  border: 1px solid ${BINARY_COLOR_SAND_90};
  border-radius: ${PHOTO_SIZE / 2}px;
  display: flex;
  height: ${PHOTO_SIZE}px;
  justify-content: center;
  margin: 5px;
  width: ${PHOTO_SIZE}px;
  &:active {
    opacity: 0.5;
  }
`;
