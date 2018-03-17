import IconDone from 'binary-ui-icons/binary/Done';
import styled from 'styled-components';
import { PHOTO_SIZE } from '../../../../utils/styles.native-and-web';

export default styled(IconDone)`
  border-radius: ${PHOTO_SIZE / 2}px;
  height: ${PHOTO_SIZE}px;
  margin: 5px;
  position: absolute;
  width: ${PHOTO_SIZE}px;
`;
