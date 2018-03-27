import styled from 'styled-components';
import { PHOTO_SIZE } from '../../../../utils/styles.native-and-web';
import Spinner from '../../../../../Spinner';

export default styled(Spinner)`
  border-radius: ${PHOTO_SIZE / 2}px;
  height: ${PHOTO_SIZE}px;
  position: absolute;
  width: ${PHOTO_SIZE}px;
`;
