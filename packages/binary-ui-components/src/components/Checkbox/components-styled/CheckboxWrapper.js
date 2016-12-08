import React from 'react';
import styled from 'styled-components';
import { CARDS_BLUE_COLOR } from 'binary-ui-styles';
import { LIST_ITEM_HALF_HEIGHT } from '../../../utils/styles';

const CHECKBOX_WRAPPER_STYLE = `
  flex-grow: 0;
  flex-shrink: 0;
  height: ${LIST_ITEM_HALF_HEIGHT}px;
  width: ${LIST_ITEM_HALF_HEIGHT}px;
  border-radius: 100%;
`;

export const CHECKBOX_CHECKED_WRAPPER_STYLE = {
  alignItems: 'center',
  backgroundColor: CARDS_BLUE_COLOR,
  border: '1px solid white',
  display: 'flex',
  justifyContent: 'center',
};

export const CHECKBOX_UNCHECKED_WRAPPER_STYLE = {
  backgroundColor: 'white',
  border: '1px solid #C0C0C0',
};

const CheckboxWrapperBase = styled.div`
  ${CHECKBOX_WRAPPER_STYLE}
`;

const propTypes = {
  isChecked: React.PropTypes.bool.isRequired,
  style: React.PropTypes.object,
};

const defaultProps = {
  style: {},
};

const CheckboxWrapper = ({ isChecked, style, ...props }) => {
  const styleExt = Object.assign(
    {},
    style,
    isChecked ? CHECKBOX_CHECKED_WRAPPER_STYLE : CHECKBOX_UNCHECKED_WRAPPER_STYLE
  );
  return (
    <CheckboxWrapperBase style={styleExt} {...props} />
  );
};

CheckboxWrapper.defaultProps = defaultProps;
CheckboxWrapper.propTypes = propTypes;

export default CheckboxWrapper;
