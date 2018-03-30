import { TouchableOpacity } from 'react-native';
import TitleWrapperBase from '../../../../components-styled/TitleWrapperBase';

export default TitleWrapperBase
  .withComponent(TouchableOpacity)
  .extend
  .attrs({
    activeOpacity: props => props.theme.opacityActive,
  })``;
