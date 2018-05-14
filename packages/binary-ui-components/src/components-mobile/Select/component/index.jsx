import PropTypes from 'prop-types';
import React from 'react';
import SelectIcon from '../components-styled/SelectIcon';
import SelectInput from '../components-styled/SelectInput';
import Wrapper from '../components-styled/Wrapper';
import Group from '../../Group';

const propTypes = {
  isDisabled: PropTypes.bool,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  selected: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  renderLeft: PropTypes.func,
};

const defaultProps = {
  isDisabled: false,
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
    const { isDisabled, items, selected, onChange, renderLeft, ...props } = this.props;
    /* eslint-enable no-unused-vars */
    return (
      <Group
        renderLeft={renderLeft}
        renderRight={() => (
          <Wrapper {...props} >
            <SelectIcon size={18} />
            <SelectInput disabled={isDisabled} value={selected} onChange={this.onChange} >
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

export default Select;
