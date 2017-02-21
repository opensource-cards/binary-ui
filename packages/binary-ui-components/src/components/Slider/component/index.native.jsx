import autobind from 'autobind-decorator';
import React from 'react';

import ListItemContents from '../../ListItemContents';
import {
  TouchableOpacity,
} from 'react-native';

const propTypes = {
  isChecked: React.PropTypes.bool.isRequired,
  onChange: React.PropTypes.func.isRequired,
};

const defaultProps = {
  isChecked: false,
};

export default class Slider extends React.Component {

  @autobind
  onClick() {
    const { isChecked, onChange } = this.props;
    if (onChange) {
      const isCheckedNew = !isChecked;
      onChange(isCheckedNew);
    }
  }

  render() {
    const { isChecked } = this.props;
    return (
      <ListItemContents isEdit={false} >
        
      </ListItemContents>
    );
  }
}

Slider.defaultProps = defaultProps;
Slider.propTypes = propTypes;
