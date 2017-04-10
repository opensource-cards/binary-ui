import ArrowDown from 'binary-ui-icons/binary/ArrowDown';
import React from 'react';
import SelectOption from '../components-styled/SelectOption';
import SelectStyled from '../components-styled/SelectStyled';
import ActionListItemIcon from '../../ActionListItemIcon';
import ListItemContents from '../../ListItemContents';

const propTypes = {
  items: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  selected: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired,
};

const defaultProps = {};

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
    const { items, selected } = this.props;
    return (
      <ListItemContents>
        <ActionListItemIcon
          onClick={this.onClick}
          IconComponent={ArrowDown}
        />
        <SelectStyled
          innerRef={this.setSelectRef}
          value={selected}
          onChange={this.onChange}
        >
          {items.map((listItem) => (
            <SelectOption key={listItem.key} value={listItem.value} >
              {listItem.label}
            </SelectOption>
          ))}
        </SelectStyled>
      </ListItemContents>
    );
  }
}

Select.propTypes = propTypes;
Select.defaultProps = defaultProps;
