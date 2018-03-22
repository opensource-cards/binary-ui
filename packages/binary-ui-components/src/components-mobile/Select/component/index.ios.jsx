import Button from 'binary-ui-components/mobile/Button';
import Group from 'binary-ui-components/mobile/Group';
import PropTypes from 'prop-types';
import React from 'react';
import { LayoutAnimation, Picker } from 'react-native';

const propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  selected: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  renderLeft: PropTypes.func,
};

const defaultProps = {};

/**
 * TimePickerAndroid: https://facebook.github.io/react-native/docs/timepickerandroid.html
 */
class Select extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
    };
    this.onPress = this.onPress.bind(this);
    this.onValueChange = this.onValueChange.bind(this);
  }

  onPress() {
    const { isVisible } = this.state;
    LayoutAnimation.configureNext({
      duration: 250,
      create: {
        type: LayoutAnimation.Types.easeInEaseOut,
        property: LayoutAnimation.Properties.opacity,
      },
      update: {
        type: LayoutAnimation.Types.easeInEaseOut,
        property: LayoutAnimation.Properties.opacity,
      },
      delete: {
        type: LayoutAnimation.Types.easeInEaseOut,
        property: LayoutAnimation.Properties.opacity,
      },
    });
    this.setState(() => ({
      isVisible: !isVisible,
    }));
  }

  onValueChange(itemValue) {
    const { onChange } = this.props;
    onChange(itemValue);
  }

  render() {
    /* eslint-disable no-unused-vars */
    const { items, selected, onChange, renderLeft, ...props } = this.props;
    /* eslint-enable no-unused-vars */
    const { isVisible } = this.state;
    const itemSelected = items.find(item => item.value === selected);
    return (
      <React.Fragment>
        <Group
          renderLeft={renderLeft}
          renderRight={() => (
            <Button
              {...props}
              label={itemSelected ? itemSelected.label : undefined}
              onPress={this.onPress}
            />
          )}
        />
        {isVisible ? (
          <Picker
            mode="dropdown"
            selectedValue={selected}
            onValueChange={this.onValueChange}
          >
            {items.map(item => (
              <Picker.Item key={item.key} label={item.label} value={item.value} />
            ))}
          </Picker>
        ) : null}
      </React.Fragment>
    );
  }
}

Select.propTypes = propTypes;
Select.defaultProps = defaultProps;

export default Select;
