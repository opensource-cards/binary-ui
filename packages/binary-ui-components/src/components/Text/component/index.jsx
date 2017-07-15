import PropTypes from 'prop-types';
import React from 'react';
import TextContent from '../components-styled/TextContent';
import TextWrapper from '../components-styled/TextWrapper';
import ActionListItemIcon from '../../ActionListItemIcon';

const propTypes = {
  children: PropTypes.any,
  isBold: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isEdit: PropTypes.bool,
  renderIcon: PropTypes.func,
  onMoreClick: PropTypes.func,
};

const defaultProps = {
  children: undefined,
  isEdit: false,
  isDisabled: false,
  isBold: false,
  renderIcon: undefined,
  onMoreClick: undefined,
};

const Text = ({ children, isBold, isDisabled, isEdit, renderIcon, onMoreClick }) => (
  <TextWrapper isEdit={isEdit} >
    <TextContent isBold={isBold} isDisabled={isDisabled} >
      {children}
    </TextContent>
    {renderIcon && (
      <ActionListItemIcon isDisabled={isDisabled} renderIcon={renderIcon} onClick={onMoreClick} />
    )}
  </TextWrapper>
);

Text.propTypes = propTypes;
Text.defaultProps = defaultProps;

export default Text;
