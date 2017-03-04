import React from 'react';
import styled from 'styled-components/native';
import { BINARY_COLOR_BLUE_40, BINARY_COLOR_GRAY_80 } from 'binary-ui-styles';
import { TouchableOpacity } from 'react-native';
import { LIST_ITEM_HALF_HEIGHT } from '../../../utils/styles.universal';

const CHECKBOX_WRAPPER_STYLE = `
  border-radius: ${LIST_ITEM_HALF_HEIGHT};
  border-width: 1;
  border-style: solid;
  flex-grow: 0;
  flex-shrink: 0;
  height: ${LIST_ITEM_HALF_HEIGHT};
  width: ${LIST_ITEM_HALF_HEIGHT};
`;

export const CHECKBOX_CHECKED_WRAPPER_STYLE = {
  alignItems: 'center',
  backgroundColor: BINARY_COLOR_BLUE_40,
  borderColor: 'white',
  flex: 1,
  justifyContent: 'center',
  overflow: 'hidden',
};

export const CHECKBOX_UNCHECKED_WRAPPER_STYLE = {
  backgroundColor: 'white',
  borderColor: BINARY_COLOR_GRAY_80,
};

const CheckboxWrapperBase = styled.View`
  ${CHECKBOX_WRAPPER_STYLE}
`;

const propTypes = {
  isChecked: React.PropTypes.bool.isRequired,
  style: React.PropTypes.object,
  onClick: React.PropTypes.func.isRequired,
};

const defaultProps = {
  style: {},
};

const CheckboxWrapper = ({ isChecked, onClick, style, ...props }) => {
  const styleExt = Object.assign(
    {},
    style,
    isChecked ? CHECKBOX_CHECKED_WRAPPER_STYLE : CHECKBOX_UNCHECKED_WRAPPER_STYLE
  );
  return (
    <TouchableOpacity onPress={onClick}>
      <CheckboxWrapperBase style={styleExt} {...props} />
    </TouchableOpacity>
  );
};

CheckboxWrapper.defaultProps = defaultProps;
CheckboxWrapper.propTypes = propTypes;

export default CheckboxWrapper;
