import PropTypes from 'prop-types';
import React from 'react';
import { withTheme } from 'styled-components';
import SelectIcon from '../components-styled/SelectIcon';
import SelectInput from '../components-styled/SelectInput';
import Wrapper from '../components-styled/Wrapper';
import Group from '../../Group';

const propTypes = {
  isDisabled: PropTypes.bool,
  isValid: PropTypes.bool,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  selected: PropTypes.string.isRequired,
  theme: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  renderLeft: PropTypes.func,
};

const defaultProps = {
  isDisabled: false,
  isValid: true,
};

class Select extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    const { onChange } = this.props;
    onChange(e.target.value);
  }

  render() {
    /* eslint-disable no-unused-vars */
    const {
      isDisabled,
      isValid,
      items,
      selected,
      theme,
      onChange,
      renderLeft,
      ...props,
    } = this.props;
    /* eslint-enable no-unused-vars */
    return (
      <Group
        renderLeft={renderLeft}
        renderRight={() => (
          <Wrapper isValid={isValid} {...props} >
            <SelectIcon opacity={isDisabled ? theme.opacityDisabled : 1} size={18} />
            <SelectInput
              disabled={isDisabled}
              isDisabled={isDisabled}
              value={selected}
              onChange={this.onChange}
            >
              {items.map((listItem) => (
                <option key={listItem.key} value={listItem.value} >
                  {listItem.label}
                </option>
              ))}
            </SelectInput>
          </Wrapper>
        )}
      />
    );
  }
}

Select.propTypes = propTypes;
Select.defaultProps = defaultProps;

export default withTheme(Select);
