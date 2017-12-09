import { TouchableOpacity } from 'react-native';
import NavBarTitleWrapperBase from '../../../../components-styled/NavBarTitleWrapperBase';

export default NavBarTitleWrapperBase
  .withComponent(TouchableOpacity)
  .extend
  .attrs({
    activeOpacity: 0.5,
  })``;
