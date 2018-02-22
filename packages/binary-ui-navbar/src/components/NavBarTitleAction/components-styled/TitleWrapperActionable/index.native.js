import { OPACITY_ACTIVE } from 'binary-ui-styles';
import { TouchableOpacity } from 'react-native';
import TitleWrapperBase from '../../../../components-styled/TitleWrapperBase';

export default TitleWrapperBase
  .withComponent(TouchableOpacity)
  .extend
  .attrs({
    activeOpacity: OPACITY_ACTIVE,
  })``;
