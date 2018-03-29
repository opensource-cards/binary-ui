import ImageUploadWrapper from '../../../../components-styled/ImageUploadWrapper';

export default ImageUploadWrapper.extend`
  opacity: ${props => (props.isLoading ? 0.5 : 1)};
`;
