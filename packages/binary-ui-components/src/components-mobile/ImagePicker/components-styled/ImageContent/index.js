import ImageUploadWrapper from '../ImageUploadWrapper';

export default ImageUploadWrapper.extend`
  background-image: url(${props => props.imageUrl});
  background-position: center;
  background-repeat: no-repeat;
  background-size: ${props => props.imageFit};
`;
