import React from 'react';
import { CARDS_BLUE_COLOR } from 'binary-ui-styles';
import styled from 'styled-components';
import { LIST_ITEM_HALF_HEIGHT } from '../../../utils/styles.universal';

const SWITCH_HANDLE_STYLE = `
  background-color: white;
  border-radius: 100%;
  height: ${LIST_ITEM_HALF_HEIGHT}px;
  position: absolute;
  top: 0px;
  transition: .25s ease-in-out;
  width: ${LIST_ITEM_HALF_HEIGHT}px;
  box-sizing: border-box;
  border-width: 1px;
  border-style: solid;
`;

const SWITCH_HANDLE_CHECKED_STYLE = {
  borderColor: CARDS_BLUE_COLOR,
  left: '22px',
};

const SWITCH_HANDLE_UNCHECKED_STYLE = {
  borderColor: '#d3d3d3',
  left: 0,
};

const SwitchHandlerBase = styled.div`
  ${SWITCH_HANDLE_STYLE}
`;

const propTypes = {
  isChecked: React.PropTypes.bool.isRequired,
};

const defaultProps = {};

const SwitchHandler = ({ isChecked }) => {
  const style = isChecked ? SWITCH_HANDLE_CHECKED_STYLE : SWITCH_HANDLE_UNCHECKED_STYLE;
  return (
    <SwitchHandlerBase style={style} />
  );
};

SwitchHandler.defaultProps = defaultProps;
SwitchHandler.propTypes = propTypes;

export default SwitchHandler;
