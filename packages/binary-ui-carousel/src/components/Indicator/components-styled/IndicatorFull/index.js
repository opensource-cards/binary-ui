import { BINARY_COLOR_GRAY_70 } from 'binary-ui-styles';
import styled from 'styled-components';

export default styled.div.attrs({
  style: props => ({
    width: props.styleWidth,
  }),
})`
  background: linear-gradient(
    to bottom, transparent 0%, transparent 47%, ${BINARY_COLOR_GRAY_70} 47%, ${BINARY_COLOR_GRAY_70} 50%, transparent 50%, transparent 100%
  );
  padding: 20px 0;
  left: 0;
  margin: 0 auto;
  position: relative;
`;
