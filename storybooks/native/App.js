import { Font } from 'expo';
import React from 'react';
import Storybook from './storybook';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isFontsLoaded: false };
  }

  componentDidMount() {
    Font.loadAsync({
      "FiraSans-Black": require("./node_modules/font-installer/lib/fira-sans/resources/FiraSans-Black.ttf"),
      "FiraSans-Bold": require("./node_modules/font-installer/lib/fira-sans/resources/FiraSans-Bold.ttf"),
      "FiraSans-ExtraBold": require("./node_modules/font-installer/lib/fira-sans/resources/FiraSans-ExtraBold.ttf"),
      "FiraSans-ExtraLight": require("./node_modules/font-installer/lib/fira-sans/resources/FiraSans-ExtraLight.ttf"),
      "FiraSans-Light": require("./node_modules/font-installer/lib/fira-sans/resources/FiraSans-Light.ttf"),
      "FiraSans-Medium": require("./node_modules/font-installer/lib/fira-sans/resources/FiraSans-Medium.ttf"),
      "FiraSans-Regular": require("./node_modules/font-installer/lib/fira-sans/resources/FiraSans-Regular.ttf"),
      "FiraSans-SemiBold": require("./node_modules/font-installer/lib/fira-sans/resources/FiraSans-SemiBold.ttf"),
      "FiraSans-Thin": require("./node_modules/font-installer/lib/fira-sans/resources/FiraSans-Thin.ttf"),
      "PTSans-Narrow": require("./node_modules/font-installer/lib/pt-sans-narrow/resources/PTSans-Narrow.ttf"),
      "PTSans-NarrowBold": require("./node_modules/font-installer/lib/pt-sans-narrow/resources/PTSans-NarrowBold.ttf")
    }).then(() => {
      this.setState({ isFontsLoaded: true });
    });
  }

  render() {
    if (!this.state.isFontsLoaded) {
      return null;
    }
    return (
      <Storybook />
    );
  }
}
