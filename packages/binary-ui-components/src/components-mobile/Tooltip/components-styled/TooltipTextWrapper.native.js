import { BINARY_COLOR_GRAY_30 } from 'binary-ui-styles';
import styled from 'styled-components/native';

export default styled.View.attrs({
  style: () => ({
    shadowOffset: { width: 0, height: 1 },
  }),
})`
  background-color: ${BINARY_COLOR_GRAY_30};
  border-radius: 5;
  elevation: 1;
  padding-horizontal: 10;
  padding-vertical: 5;
  shadow-color: #000;
  shadow-opacity: 0.1;
  shadow-radius: 2;
`;
