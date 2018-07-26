import styled from 'styled-components';
import Label from '../../../Label';

export default styled(Label)`
  width: calc(100% - ${props => props.theme.sizeListItemHeight}px);
`;
