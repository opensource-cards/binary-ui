import PropTypes from 'prop-types';
import React from 'react';
import TextContent from '../components-styled/TextContent';
import TextWrapper from '../components-styled/TextWrapper';
import ActionListItemIcon from '../../ActionListItemIcon';

const propTypes = {
  children: PropTypes.string.isRequired,
  isBold: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isEdit: PropTypes.bool,
  renderIcon: PropTypes.func,
  onIconClick: PropTypes.func,
};

const defaultProps = {
  isBold: false,
  isEdit: false,
  isDisabled: false,
  renderIcon: undefined,
  onIconClick: undefined,
};

const Textline = ({ children, isBold, isDisabled, isEdit, renderIcon, onIconClick }) => (
  <TextWrapper isEdit={isEdit} >
    <TextContent isBold={isBold} isDisabled={isDisabled} >
      {isBold ? children.toUpperCase() : children}
    </TextContent>
    {renderIcon && (
      <ActionListItemIcon isDisabled={isDisabled} renderIcon={renderIcon} onClick={onIconClick} />
    )}
  </TextWrapper>
);

Textline.propTypes = propTypes;
Textline.defaultProps = defaultProps;

export default Textline;
