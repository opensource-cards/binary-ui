import styled from 'styled-components/native';
import ActionableIcon from '../../ActionableIcon';
import React from 'react';
import { TouchableOpacity } from 'react-native';

const StyledActionableIcon = styled(ActionableIcon)`
  flex-shrink: 0;
  padding-top: 9;
  padding-bottom: 9;
  padding-left: 5;
  padding-right: 5;
  width: 30;
`;

const propTypes = {
  onClick: React.PropTypes.func,
};

const defaultProps = {};

const TouchableIcon = ({ onClick, ...props }) => (
  <TouchableOpacity onPress={onClick}>
    <StyledActionableIcon {...props} />
  </TouchableOpacity>
);

TouchableIcon.defaultProps = defaultProps;
TouchableIcon.propTypes = propTypes;

export default TouchableIcon;
