import React from 'react';
import { BINARY_COLOR_GRAY_40 } from 'binary-ui-styles';
import SelectArrow from '../components-styled/SelectArrow';
import SelectOption from '../components-styled/SelectOption';
import SelectStyled from '../components-styled/SelectStyled';
import SelectWrapper from '../components-styled/SelectWrapper';
import { getHighlightEditStyle } from '../../../utils/styles-api';

const propTypes = {
  items: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  isBold: React.PropTypes.bool.isRequired,
  isEdit: React.PropTypes.bool.isRequired,
  selected: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired,
};

const defaultProps = {
  isBold: false,
  isEdit: true,
};

export default class Select extends React.Component {

  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.onChange = this.onChange.bind(this);
    this.setSelectRef = this.setSelectRef.bind(this);
  }

  onClick() {
    const event = document.createEvent('MouseEvents');
    event.initMouseEvent('mousedown', true, true, window);
    this.selectRef.dispatchEvent(event);
  }

  onChange(e) {
    const { onChange } = this.props;
    onChange(e.target.value);
  }

  setSelectRef(selectRef) {
    this.selectRef = selectRef;
  }

  render() {
    const { items, isBold, isEdit, selected } = this.props;
    return (
      <SelectWrapper
        style={getHighlightEditStyle(isEdit, true, false, undefined)}
      >
        <SelectArrow
          size={18}
        />
        <SelectStyled
          innerRef={this.setSelectRef}
          isBold={isBold}
          value={selected}
          onChange={this.onChange}
        >
          {items.map((listItem) => (
            <SelectOption key={listItem.key} value={listItem.value} >
              {listItem.label}
            </SelectOption>
          ))}
        </SelectStyled>
      </SelectWrapper>
    );
  }
}

Select.propTypes = propTypes;
Select.defaultProps = defaultProps;
