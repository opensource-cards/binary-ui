import styled from 'styled-components';
import TitleWrapperBase from '../../../../components-styled/TitleWrapperBase';

export default styled(TitleWrapperBase)`
  align-items: center;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  user-select: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-touch-callout: none;
  &:active {
    opacity: 0.5;
  }
`;
