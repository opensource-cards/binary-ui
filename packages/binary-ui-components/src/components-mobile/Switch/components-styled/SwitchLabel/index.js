import { LIST_ITEM_HEIGHT } from 'binary-ui-styles';
import styled from 'styled-components';
import Label from '../../../Label';

export default styled(Label)`
  width: calc(100% - ${LIST_ITEM_HEIGHT})%;
`;
