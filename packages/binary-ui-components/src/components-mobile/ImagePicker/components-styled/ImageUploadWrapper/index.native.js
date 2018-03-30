import styled from 'styled-components';
import { PHOTO_SIZE } from '../../utils/styles.native-and-web';

export default styled.TouchableOpacity`
  align-items: center;
  background-color: transparent;
  border-color: ${props => props.theme.colorBackgroundMain};
  border-radius: ${PHOTO_SIZE / 2}px;
  border-width: 1px;
  height: ${PHOTO_SIZE}px;
  justify-content: center;
  overflow: hidden;
  margin: 5px;
  width: ${PHOTO_SIZE}px;
`;
