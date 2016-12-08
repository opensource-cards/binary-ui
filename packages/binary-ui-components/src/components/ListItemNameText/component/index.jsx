import React from 'react';
import autobind from 'autobind-decorator';
import ListItemNameTextWrapper from '../components-styled/ListItemNameTextWrapper';
import ListItemName from '../../ListItemName';
import ActionableListItemIcon from '../../ActionableListItemIcon';

const propTypes = {
  children: React.PropTypes.node,
  id: React.PropTypes.any,
  isEdit: React.PropTypes.bool,
  isFull: React.PropTypes.bool,
  onClick: React.PropTypes.func,
  IconComponent: React.PropTypes.func,
};

const defaultProps = {
  isEdit: false,
};

export default class ListItemNameText extends React.Component {

  @autobind
  onClick() {
    const { id, onClick } = this.props;
    if (onClick) {
      onClick(id);
    }
  }

  renderListItemIcon() {
    const { IconComponent } = this.props;
    return (<ActionableListItemIcon onClick={this.onClick} IconComponent={IconComponent} />);
  }

  render() {
    const { isEdit, isFull, children, IconComponent } = this.props;
    return (
      <ListItemName isEdit={isEdit} isFull={isFull} onClick={this.onClick} >
        <ListItemNameTextWrapper>
          {children.toUpperCase()}
        </ListItemNameTextWrapper>
        {IconComponent && this.renderListItemIcon()}
      </ListItemName>
    );
  }
}

ListItemNameText.propTypes = propTypes;
ListItemNameText.defaultProps = defaultProps;
