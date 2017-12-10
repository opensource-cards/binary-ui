import ActionIcon from 'binary-ui-components/mobile/ActionIcon';
import styled from 'styled-components/native';
import { STACK_HEADER_HEIGHT } from '../../../../constants';

export default styled(ActionIcon)`
  align-items: center;
  flex-shrink: 0;
  flex-grow: 0;
  height: ${STACK_HEADER_HEIGHT};
  justify-content: center;
  overflow: hidden;
  width: 50;
`;
