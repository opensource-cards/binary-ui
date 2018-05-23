import { TouchableOpacity, View } from 'react-native';
import ImageUploadWrapper from '../../../../components-styled/ImageUploadWrapper';

const ImageContent = ImageUploadWrapper.extend``;

// This component should be used for a not loading image.
ImageContent.TouchableOpacity = ImageUploadWrapper.withComponent(
  TouchableOpacity
).extend``;

// This component should be used for a loading image.
ImageContent.View = ImageUploadWrapper.withComponent(View).extend``;

export default ImageContent;
