import React from 'react';
import styled from 'styled-components/native';
import { CARDS_BLUE_COLOR } from 'binary-ui-styles';
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
  backgroundColor: CARDS_BLUE_COLOR,
  borderColor: 'white',
  flex: 1,
  justifyContent: 'center',
  overflow: 'hidden',
};

export const CHECKBOX_UNCHECKED_WRAPPER_STYLE = {
  backgroundColor: 'white',
  borderColor: '#C0C0C0',
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
