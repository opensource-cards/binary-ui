import React from 'react';
import ListItemContentsWrapper from '../components-styled/ListItemContentsWrapper';
import { getHighlightEditStyle } from '../../../utils/styles-api';

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
  borderColor: undefined,
  children: undefined,
  isEdit: true,
  isTapHighlight: false,
  isTypingHighlight: false,
  isValid: true,
  onClick: undefined,
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
    isTapHighlight={isTapHighlight}
    style={getHighlightEditStyle(
      isEdit,
      isValid,
      isTypingHighlight,
      borderColor
    )}
    onClick={onClick}
  >
    {children}
  </ListItemContentsWrapper>
);

ListItemContents.propTypes = propTypes;
ListItemContents.defaultProps = defaultProps;

export default ListItemContents;
