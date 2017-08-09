import { LIST_ITEM_HEIGHT } from 'binary-ui-styles';
import styled from 'styled-components/native';

const halfHeight = LIST_ITEM_HEIGHT / 2;

export default styled.View`
  background-color: #E6E6E6;
  height: 1px;
  width: 100%;
  position: absolute;
  top: ${halfHeight};
`;
