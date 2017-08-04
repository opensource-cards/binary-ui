import isString from 'lodash/isString';
import PropTypes from 'prop-types';
import React from 'react';
import TextContent from '../components-styled/TextContent';
import TextWrapper from '../components-styled/TextWrapper';
import TextlineIcon from '../components-styled/TextlineIcon';

const propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.number,
    PropTypes.string,
  ]),
  isBold: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isEdit: PropTypes.bool,
  renderIcon: PropTypes.func,
  onMoreClick: PropTypes.func,
};

const defaultProps = {
  children: undefined,
  isBold: false,
  isEdit: false,
  isDisabled: false,
  renderIcon: undefined,
  onMoreClick: undefined,
};

const Textline = ({ children, isBold, isDisabled, isEdit, renderIcon, onMoreClick }) => (
  <TextWrapper isEdit={isEdit} >
    <TextContent isBold={isBold} isDisabled={isDisabled} >
      {isBold && isString(children) ? children.toUpperCase() : children}
    </TextContent>
    {renderIcon && (
      <TextlineIcon isDisabled={isDisabled} renderIcon={renderIcon} onClick={onMoreClick} />
    )}
  </TextWrapper>
);

Textline.propTypes = propTypes;
Textline.defaultProps = defaultProps;

export default Textline;
