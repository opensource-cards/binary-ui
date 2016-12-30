import { CardsIconArrowDown } from 'binary-ui-icons';
import React from 'react';
import autobind from 'autobind-decorator';
import SelectOption from '../components-styled/SelectOption';
import SelectStyled from '../components-styled/SelectStyled';
import ActionListItemIcon from '../../ActionListItemIcon';
import ListItemContents from '../../ListItemContents';

const propTypes = {
  items: React.PropTypes.arrayOf(React.PropTypes.any).isRequired,
  selected: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired,
};

const defaultProps = {
  items: [],
  selected: '',
};

export default class Select extends React.Component {

  @autobind
  onClick() {
    const event = document.createEvent('MouseEvents');
    event.initMouseEvent('mousedown', true, true, window);
    this.selectRef.dispatchEvent(event);
  }

  @autobind
  onChange(e) {
    const { onChange } = this.props;
    if (onChange) {
      onChange(e.target.value);
    }
  }

  @autobind
  setSelectRef(selectRef) {
    this.selectRef = selectRef;
  }

  render() {
    const { items } = this.props;
    return (
      <ListItemContents>
        <ActionListItemIcon
          onClick={this.onClick}
          IconComponent={CardsIconArrowDown}
        />
        <SelectStyled
          innerRef={this.setSelectRef}
          value={this.props.selected}
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
