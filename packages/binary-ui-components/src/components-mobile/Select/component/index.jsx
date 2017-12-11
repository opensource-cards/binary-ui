import PropTypes from 'prop-types';
import React from 'react';
import SelectArrow from '../components-styled/SelectArrow';
import SelectStyled from '../components-styled/SelectStyled';
import SelectWrapper from '../components-styled/SelectWrapper';

const propTypes = {
  isBold: PropTypes.bool,
  isEdit: PropTypes.bool,
  isValid: PropTypes.bool,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  selected: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const defaultProps = {
  isBold: false,
  isEdit: true,
  isValid: true,
};

export default class Select extends React.PureComponent {

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
    const { items, isBold, isEdit, isValid, selected, onChange, ...props } = this.props;
    /* eslint-enable no-unused-vars */
    return (
      <SelectWrapper
        isEdit={isEdit}
        isTypingHighlight={false}
        isValid={isValid}
        {...props}
      >
        <SelectArrow size={18} />
        <SelectStyled isBold={isBold} value={selected} onChange={this.onChange} >
          {items.map((listItem) => (
            <option key={listItem.key} value={listItem.value} >
              {listItem.label}
            </option>
          ))}
        </SelectStyled>
      </SelectWrapper>
    );
  }
}

Select.propTypes = propTypes;
Select.defaultProps = defaultProps;
