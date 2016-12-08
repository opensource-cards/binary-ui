import { CARDS_BLUE_COLOR } from 'binary-ui-styles';
import React from 'react';
import { actionAreaBlockHOC } from 'react-action-hoc';
import styled from 'styled-components';
import NATIVE_AND_WEB_STYLE from './style';

const LinkExtStyled = styled.a`
  ${NATIVE_AND_WEB_STYLE}
  color: ${CARDS_BLUE_COLOR};
  text-decoration: none;
  display: flex;

  &:hover {
    text-decoration: underline;
  }
`;

export default actionAreaBlockHOC(
  (props) => (<LinkExtStyled {...props} />)
);
