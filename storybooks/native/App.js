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
      'Fira Sans': require('./node_modules/font-installer/lib/fira-sans/resources/Fira Sans Regular.ttf'),
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
