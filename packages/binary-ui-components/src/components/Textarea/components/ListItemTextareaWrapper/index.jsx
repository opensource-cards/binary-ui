import React from 'react';
import ListItemTextareaWrapperWrapper from '../../components-styled/ListItemTextareaWrapperWrapper';

const propTypes = {
  children: React.PropTypes.node,
  isTypingHighlight: React.PropTypes.bool,
  isValid: React.PropTypes.bool,
};

const defaultProps = {
  isTypingHighlight: false,
  isValid: true,
};

const ListItemTextareaWrapper = ({
  children,
  isTypingHighlight,
  isValid,
}) => (
  <ListItemTextareaWrapperWrapper isTypingHighlight={isTypingHighlight} isValid={isValid} >
    {children}
  </ListItemTextareaWrapperWrapper>
);

ListItemTextareaWrapper.propTypes = propTypes;
ListItemTextareaWrapper.defaultProps = defaultProps;

export default ListItemTextareaWrapper;
