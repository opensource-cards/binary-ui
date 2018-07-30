import styled from 'styled-components';
import Label from '../../../Label';

export default styled(Label)`
  box-sizing: border-box;
  padding-left: 10px;
  padding-right: 10px;
  width: calc(100% - ${props => props.theme.sizeListItemHeight}px);
`;
