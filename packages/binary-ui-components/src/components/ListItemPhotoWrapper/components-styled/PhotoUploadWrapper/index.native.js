import styled from 'styled-components/native';
import ImagePicker from 'react-native-image-picker';
import { TouchableOpacity } from 'react-native';
import React from 'react';
import autobind from 'autobind-decorator';
import {
  UNDERLINE_BORDER_STANDARD_NATIVE,
  UNDERLINE_BORDER_ACTIVE_NATIVE,
} from '../../utils/styles-photo';

const StyledImage = styled.Image`
  ${UNDERLINE_BORDER_STANDARD_NATIVE}
  /*
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  */
  border-radius: 30;
  height: 60;
  margin: 5;
  width: 60;

  &:active {
    ${UNDERLINE_BORDER_ACTIVE_NATIVE}
    /* opacity: 0.5; */
  }

  &:hover {
    ${UNDERLINE_BORDER_ACTIVE_NATIVE}
  }
`;

// const StyledView = styled.View`
// `;

const propTypes = {
  onClick: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired,
  noImageUrl: React.PropTypes.string,
};

const defaultProps = {};

export default class PhotoUploadInput extends React.Component {
  @autobind
  onClick() {
    const { onChange } = this.props;
    ImagePicker.showImagePicker({
      title: 'Select picture',
      storageOptions: {},
    }, (response) => {
      if (response.didCancel) {
        // console.log('User cancelled image picker');
      } else if (response.error) {
        // console.log('ImagePicker Error: ', response.error);
      } else {
        onChange(response);
      }
    });
  }

  render() {
    const { noImageUrl } = this.props;
    return (
      <TouchableOpacity onPress={this.onClick} >
        <StyledImage source={{ uri: noImageUrl }} />
      </TouchableOpacity>
    );
  }
}

PhotoUploadInput.propTypes = propTypes;
PhotoUploadInput.defaultProps = defaultProps;
