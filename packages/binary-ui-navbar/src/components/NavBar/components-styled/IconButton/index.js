import ActionIcon from 'binary-ui-components/mobile/ActionIcon';
import styled from 'styled-components';
import { STACK_HEADER_HEIGHT } from '../../../../constants';

export default styled(ActionIcon)`
  align-items: center;
  cursor: pointer;
  display: flex;
  flex-shrink: 0;
  flex-grow: 0;
  height: ${STACK_HEADER_HEIGHT}px;
  justify-content: center;
  min-width: 50px;
  user-select: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-touch-callout: none;
`;
