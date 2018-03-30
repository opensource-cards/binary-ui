import { TouchableOpacity, View } from 'react-native';
import ImageUploadWrapper from '../../../../components-styled/ImageUploadWrapper';

const ImageContent = ImageUploadWrapper.extend``;

// This component should be used for a not loading image.
ImageContent.TouchableOpacity = ImageUploadWrapper.withComponent(
  TouchableOpacity
).extend`
  opacity: 1;
`;

// This component should be used for a loading image.
ImageContent.View = ImageUploadWrapper.withComponent(View).extend`
  opacity: ${props => props.theme.opacityDisabled};
`;

export default ImageContent;
