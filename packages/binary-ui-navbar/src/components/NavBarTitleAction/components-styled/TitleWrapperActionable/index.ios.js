import { TouchableOpacity } from 'react-native';
import styled from 'styled-components';
import TitleWrapperBase from '../../../../components-styled/TitleWrapperBase';

export default styled(TitleWrapperBase.withComponent(TouchableOpacity)).attrs({
  activeOpacity: props => props.theme.opacityActive,
})``;
