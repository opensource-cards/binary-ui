import React from 'react';
import ListItemTextareaWrapperWrapper from '../../components-styled/ListItemTextareaWrapperWrapper';
import { getHighlightEditStyle } from '../../../../utils/styles-api';

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
  <ListItemTextareaWrapperWrapper
    style={getHighlightEditStyle(
      true,
      isValid,
      isTypingHighlight
    )}
  >
    {children}
  </ListItemTextareaWrapperWrapper>
);

ListItemTextareaWrapper.propTypes = propTypes;
ListItemTextareaWrapper.defaultProps = defaultProps;

export default ListItemTextareaWrapper;
