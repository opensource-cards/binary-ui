import { Font } from 'expo';
import React from 'react';
import Storybook from './storybook';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { fontLoaded: false };
  }

  componentDidMount() {
    Font.loadAsync({
      'FiraSans Thin': require('./node_modules/font-installer/lib/fira-sans/resources/Fira Sans Thin.ttf'),
      'FiraSans ExtraLight': require('./node_modules/font-installer/lib/fira-sans/resources/Fira Sans ExtraLight.ttf'),
      'FiraSans Light': require('./node_modules/font-installer/lib/fira-sans/resources/Fira Sans Light.ttf'),
      'FiraSans Regular': require('./node_modules/font-installer/lib/fira-sans/resources/Fira Sans Regular.ttf'),
      'FiraSans Medium': require('./node_modules/font-installer/lib/fira-sans/resources/Fira Sans Medium.ttf'),
      'FiraSans SemiBold': require('./node_modules/font-installer/lib/fira-sans/resources/Fira Sans SemiBold.ttf'),
      'FiraSans Bold': require('./node_modules/font-installer/lib/fira-sans/resources/Fira Sans Bold.ttf'),
      'FiraSans ExtraBold': require('./node_modules/font-installer/lib/fira-sans/resources/Fira Sans ExtraBold.ttf'),
      'FiraSans Black': require('./node_modules/font-installer/lib/fira-sans/resources/Fira Sans Black.ttf'),
    }).then(() => {
      this.setState({ fontLoaded: true });
    });
  }

  render() {
    if (!this.state.fontLoaded) {
      return null;
    }
    return (
      <Storybook />
    );
  }
}
