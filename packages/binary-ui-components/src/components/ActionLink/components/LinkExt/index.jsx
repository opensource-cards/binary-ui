import React from 'react';
import { actionAreaBlockHOC } from 'react-action-hoc';
import styled from 'styled-components';
import NATIVE_AND_WEB_STYLE from './style';

const LinkExtStyled = styled.a`
  ${NATIVE_AND_WEB_STYLE}
  display: flex;
  text-decoration: none;
`;

export default actionAreaBlockHOC(
  (props) => (<LinkExtStyled {...props} />)
);
