import React from 'react';
import { CARDS_BLUE_COLOR } from 'binary-ui-styles';
import styled from 'styled-components/native';
import { LIST_ITEM_HALF_HEIGHT } from '../../../utils/styles';

const SWITCH_HANDLE_STYLE = `
  background-color: white;
  border-radius: ${LIST_ITEM_HALF_HEIGHT};
  height: ${LIST_ITEM_HALF_HEIGHT};
  position: absolute;
  top: 0;
  width: ${LIST_ITEM_HALF_HEIGHT};
  border-width: 1;
  border-style: solid;
`;

/*
  transition: .25s ease-in-out;
*/

const SWITCH_HANDLE_CHECKED_STYLE = {
  borderColor: CARDS_BLUE_COLOR,
  left: 22,
};

const SWITCH_HANDLE_UNCHECKED_STYLE = {
  borderColor: '#d3d3d3',
  left: 0,
};

const SwitchHandlerBase = styled.View`
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
