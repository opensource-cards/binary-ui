import styled from 'styled-components/native';
import {
  PHOTO_SIZE,
  UNDERLINE_BORDER_STANDARD_NATIVE,
  UNDERLINE_BORDER_ACTIVE_NATIVE,
} from '../../utils/styles-photo';
import { TouchableOpacity } from 'react-native';
import React from 'react';

const StyledView = styled.View`
  border-radius: ${PHOTO_SIZE / 2};
  ${UNDERLINE_BORDER_STANDARD_NATIVE}
  /*
  background-image: url(${(props) => props.url});
  background-position: center;
  background-repeat: no-repeat;
  background-size: ${(props) => props.photoFit};
  */
  height: ${PHOTO_SIZE};
  margin: 5;
  width: ${PHOTO_SIZE};

  &:active {
    ${UNDERLINE_BORDER_ACTIVE_NATIVE}
    /* opacity: 0.5; */
  }

  &:hover {
    ${UNDERLINE_BORDER_ACTIVE_NATIVE}
  }
`;

const StyledImage = styled.Image`
  flex: 1;
  resize-mode: cover;
  border-radius: ${PHOTO_SIZE / 2};
  ${UNDERLINE_BORDER_STANDARD_NATIVE}
  /*
  background-image: url(${(props) => props.url});
  background-position: center;
  background-repeat: no-repeat;
  background-size: ${(props) => props.photoFit};
  */
  height: ${PHOTO_SIZE};
  width: ${PHOTO_SIZE};

  &:active {
    ${UNDERLINE_BORDER_ACTIVE_NATIVE}
    /* opacity: 0.5; */
  }

  &:hover {
    ${UNDERLINE_BORDER_ACTIVE_NATIVE}
  }
`;

const defaultProps = {};

const propTypes = {
  url: React.PropTypes.string,
  onClick: React.PropTypes.func,
  children: React.PropTypes.any,
};

const StyledImageExt = ({ url, onClick, children }) => (
  <TouchableOpacity onPress={onClick}>
    <StyledView>
      <StyledImage source={{ uri: url }} />
      {children}
    </StyledView>
  </TouchableOpacity>
);

StyledImageExt.propTypes = propTypes;
StyledImageExt.defaultProps = defaultProps;

export default StyledImageExt;
