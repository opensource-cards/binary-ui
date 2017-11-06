import { TouchableOpacity } from 'react-native';
import NavBarTitleWrapperBase from '../NavBarTitleWrapperBase';

export default NavBarTitleWrapperBase
  .withComponent(TouchableOpacity)
  .extend
  .attrs({
    activeOpacity: 0.5,
  })``;
