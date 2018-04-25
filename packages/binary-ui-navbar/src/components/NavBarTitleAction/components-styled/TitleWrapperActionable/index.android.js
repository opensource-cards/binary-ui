import { View } from 'react-native';
import TitleWrapperBase from '../../../../components-styled/TitleWrapperBase';

export default TitleWrapperBase
  .withComponent(View)
  .extend`
    height: 100%;
  `;
