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

const ActionTextareaPure = ({
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
    <textarea
      style={getInfoCardDesignButtonStyle}
      onBlur={onBlur}
      onChange={onChange}
      onFocus={onFocus}
      {...props}
    />
  );
};

ActionTextareaPure.propTypes = propTypes;
ActionTextareaPure.defaultProps = defaultProps;

export const CardsActionTextarea = actionAreaEditorHOC(ActionTextareaPure);
