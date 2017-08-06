import PropTypes from 'prop-types';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import ActionIconContent from './ActionIconContent';

const propTypes = {
  color: PropTypes.string,
  isDisabled: PropTypes.bool,
  size: PropTypes.number,
  renderIcon: PropTypes.func.isRequired,
};

const defaultProps = {
  color: undefined,
  isDisabled: false,
  size: undefined,
};

const ActionIcon = ({ color, isDisabled, size, renderIcon, ...props }) => (
  !isDisabled ? (
    <TouchableOpacity isDisabled={isDisabled} {...props} >
      <ActionIconContent
        color={color}
        isDisabled={isDisabled}
        size={size}
        renderIcon={renderIcon}
      />
    </TouchableOpacity>
  ) : (
    <ActionIconContent
      color={color}
      isDisabled={isDisabled}
      size={size}
      renderIcon={renderIcon}
    />
  )
);

ActionIcon.propTypes = propTypes;
ActionIcon.defaultProps = defaultProps;

export default ActionIcon;
