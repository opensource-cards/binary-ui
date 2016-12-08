import styled from 'styled-components/native';
import NATIVE_AND_WEB_STYLE from './style';
// import { actionAreaBlockHOC } from 'react-action-hoc';

/*
export default actionAreaBlockHOC(
  (restProps) => (<a {...restProps} />)
);
*/

// TODO: implement activity
export default styled.View`
  ${NATIVE_AND_WEB_STYLE}
  flex-direction: row;
`;
