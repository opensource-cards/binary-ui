import React from 'react';
import ListItemContentsWrapper from '../components-styled/ListItemContentsWrapper';

const propTypes = {
  borderColor: React.PropTypes.string,
  children: React.PropTypes.node,
  isEdit: React.PropTypes.bool,
  isTapHighlight: React.PropTypes.bool,
  isTypingHighlight: React.PropTypes.bool,
  isValid: React.PropTypes.bool,
  onClick: React.PropTypes.func,
};

const defaultProps = {
  isEdit: true,
  isValid: true,
  isTapHighlight: false,
  isTypingHighlight: false,
};

const ListItemContents = ({
  borderColor,
  isEdit,
  isTapHighlight,
  isTypingHighlight,
  isValid,
  children,
  onClick,
}) => (
  <ListItemContentsWrapper
    borderColor={borderColor}
    isEdit={isEdit}
    isTapHighlight={isTapHighlight}
    isTypingHighlight={isTypingHighlight}
    isValid={isValid}
    onClick={onClick}
  >
    {children}
  </ListItemContentsWrapper>
);

ListItemContents.propTypes = propTypes;
ListItemContents.defaultProps = defaultProps;

export default ListItemContents;
