import { TouchableOpacity, View } from 'react-native';
import styled from 'styled-components';
import ImageUploadWrapper from '../../../../components-styled/ImageUploadWrapper';

const ImageContent = styled(ImageUploadWrapper)``;

// This component should be used for a not loading image.
ImageContent.TouchableOpacity = styled(
  ImageUploadWrapper.withComponent(TouchableOpacity)
)``;

// This component should be used for a loading image.
ImageContent.View = styled(ImageUploadWrapper.withComponent(View))``;

export default ImageContent;
