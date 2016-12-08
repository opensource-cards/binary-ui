import { CARDS_BLUE_COLOR, LIST_ITEM_HEIGHT } from 'binary-ui-styles';
import React from 'react';
import styled from 'styled-components/native';
import { LIST_ITEM_HALF_HEIGHT } from '../../../utils/styles';

const SWITCH_BACKGROUND_STYLE = `
  border-radius: ${LIST_ITEM_HALF_HEIGHT};
  height: ${LIST_ITEM_HALF_HEIGHT};
  position: absolute;
  top: 0;
  width: ${LIST_ITEM_HEIGHT};
`;

/*
  transition: .25s ease-in-out;
*/

const SWITCH_BACKGROUND_CHECKED_STYLE = {
  backgroundColor: CARDS_BLUE_COLOR,
};

const SWITCH_BACKGROUND_UNCHECKED_STYLE = {
  backgroundColor: '#d3d3d3',
};

const SwitchBackgroundBase = styled.View`
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
