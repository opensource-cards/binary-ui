import React from 'react';
import ListItemNameTextWrapper from '../components-styled/ListItemNameTextWrapper';
import ListItemName from '../../ListItemName';
import ActionableListItemIcon from '../../ActionableListItemIcon';

const propTypes = {
  children: React.PropTypes.node,
  isEdit: React.PropTypes.bool,
  isFull: React.PropTypes.bool,
  onClick: React.PropTypes.func,
  renderIcon: React.PropTypes.func,
};

const defaultProps = {
  children: undefined,
  isEdit: false,
  isFull: undefined,
  onClick: undefined,
  renderIcon: undefined,
};

export default class ListItemNameText extends React.Component {

  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    const { onClick } = this.props;
    if (onClick) {
      onClick();
    }
  }

  render() {
    const { isEdit, isFull, children, renderIcon } = this.props;
    return (
      <ListItemName isEdit={isEdit} isFull={isFull} onClick={this.onClick} >
        <ListItemNameTextWrapper>
          {children.toUpperCase()}
        </ListItemNameTextWrapper>
        {renderIcon && (
          <ActionableListItemIcon
            isActive={false}
            isDisabled={false}
            isHover={false}
            renderIcon={renderIcon}
            onClick={this.onClick}
          />
        )}
      </ListItemName>
    );
  }
}

ListItemNameText.propTypes = propTypes;
ListItemNameText.defaultProps = defaultProps;
