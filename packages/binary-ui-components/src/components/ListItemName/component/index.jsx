import React from 'react';
import ListItemNameWrapper from '../components-styled/ListItemNameWrapper';

const propTypes = {
  children: React.PropTypes.node,
  isEdit: React.PropTypes.bool,
  isFull: React.PropTypes.bool,
  onClick: React.PropTypes.func,
};

const defaultProps = {
  children: undefined,
  isEdit: false,
  isFull: false,
  onClick: undefined,
};

const ListItemName = ({ isEdit, isFull, children, onClick }) => (
  <ListItemNameWrapper isEdit={isEdit} isFull={isFull} onClick={onClick} >
    {children}
  </ListItemNameWrapper>
);

ListItemName.propTypes = propTypes;
ListItemName.defaultProps = defaultProps;

export default ListItemName;
