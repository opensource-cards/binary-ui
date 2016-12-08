import { CARDS_BLUE_COLOR, LIST_ITEM_HEIGHT } from 'binary-ui-styles';
import React from 'react';
import styled from 'styled-components';
import { LIST_ITEM_HALF_HEIGHT } from '../../../utils/styles';

const SWITCH_BACKGROUND_STYLE = `
  border-radius: ${LIST_ITEM_HALF_HEIGHT}px;
  height: ${LIST_ITEM_HALF_HEIGHT}px;
  position: absolute;
  top: 0px;
  transition: .25s ease-in-out;
  width: ${LIST_ITEM_HEIGHT}px;
`;

const SWITCH_BACKGROUND_CHECKED_STYLE = {
  backgroundColor: CARDS_BLUE_COLOR,
};

const SWITCH_BACKGROUND_UNCHECKED_STYLE = {
  backgroundColor: '#d3d3d3',
};

const SwitchBackgroundBase = styled.div`
  ${SWITCH_BACKGROUND_STYLE}
`;

const propTypes = {
  isChecked: React.PropTypes.bool.isRequired,
};

const defaultProps = {};

const SwitchBackground = ({ isChecked }) => {
  const style = isChecked ? SWITCH_BACKGROUND_CHECKED_STYLE : SWITCH_BACKGROUND_UNCHECKED_STYLE;
  return (
    <SwitchBackgroundBase style={style} />
  );
};

SwitchBackground.defaultProps = defaultProps;
SwitchBackground.propTypes = propTypes;

export default SwitchBackground;
