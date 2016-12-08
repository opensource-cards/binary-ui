import React from 'react';
import { actionAreaEditorHOC } from 'react-action-hoc';
import { getActionStyle } from '../../utils/styles-api';

const propTypes = {
  isActive: React.PropTypes.bool.isRequired,
  isDisabled: React.PropTypes.bool,
  style: React.PropTypes.object,
  styleActiveExt: React.PropTypes.object,
  styleDisabledExt: React.PropTypes.object,
  onBlur: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func,
  onFocus: React.PropTypes.func.isRequired,
};

const defaultProps = {
  isDisabled: false,
};

const ActionInputPure = ({
  isActive,
  isDisabled,
  style,
  styleActiveExt,
  styleDisabledExt,
  onBlur,
  onChange,
  onFocus,
  ...props,
}) => {
  const getInfoCardDesignButtonStyle = getActionStyle(
    style,
    styleActiveExt,
    styleDisabledExt,
    undefined,
    isActive,
    isDisabled,
    undefined
  );
  return (
    <input
      style={getInfoCardDesignButtonStyle}
      onBlur={onBlur}
      onChange={onChange}
      onFocus={onFocus}
      {...props}
    />
  );
};

ActionInputPure.propTypes = propTypes;
ActionInputPure.defaultProps = defaultProps;

export const CardsActionInput = actionAreaEditorHOC(ActionInputPure);
