import PropTypes from 'prop-types';
import React from 'react';
import { Linking } from 'react-native';
import ActionLinkWrapper from '../components-styled/ActionLinkWrapper';

const propTypes = {
  children: PropTypes.node,
  href: PropTypes.string,
  onPress: PropTypes.func,
};

const defaultProps = {
  children: undefined,
  href: undefined,
  onPress: () => {},
};

class ActionLink extends React.Component {
  constructor(props) {
    super(props);
    this.onPress = this.onPress.bind(this);
  }

  onPress() {
    const { href, onPress } = this.props;
    onPress();
    Linking.canOpenURL(href)
      .then(supported => {
        if (!supported) {
          if (process.env.NODE_ENV !== 'production') {
            console.warn('Can\'t handle url:', href);
            return undefined;
          }
        }
        return Linking.openURL(href);
      })
      .catch(error => {
        if (process.env.NODE_ENV !== 'production') {
          console.warn('An error occurred', error);
        }
      });
  }

  render() {
    // Note: No need to pass 'href' prop.
    /* eslint-disable no-unused-vars */
    const { children, href, ...props } = this.props;
    /* eslint-enable no-unused-vars */
    return (
      <ActionLinkWrapper {...props} onPress={this.onPress} >
        {children}
      </ActionLinkWrapper>
    );
  }
}

ActionLink.propTypes = propTypes;
ActionLink.defaultProps = defaultProps;

export default ActionLink;
