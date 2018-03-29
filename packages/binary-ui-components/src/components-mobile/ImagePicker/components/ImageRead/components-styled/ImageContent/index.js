import { TRANSITION_FEEDBACK_OPACITY } from 'binary-ui-styles';
import ImageUploadWrapper from '../../../../components-styled/ImageUploadWrapper';

export default ImageUploadWrapper.extend`
  background-image: url(${props => props.imageUrl});
  background-position: center;
  background-repeat: no-repeat;
  background-size: ${props => props.imageFit};
  opacity: ${props => (props.isLoading ? 0.5 : 1)};
  transition: ${TRANSITION_FEEDBACK_OPACITY};
`;
