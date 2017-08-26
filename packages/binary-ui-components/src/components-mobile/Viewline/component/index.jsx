import PropTypes from 'prop-types';
import React from 'react';
import ViewContent from '../components-styled/ViewContent';
import ViewWrapper from '../components-styled/ViewWrapper';
import ViewlineIcon from '../components-styled/ViewlineIcon';

const propTypes = {
  children: PropTypes.any,
  isDisabled: PropTypes.bool,
  isEdit: PropTypes.bool,
  renderIcon: PropTypes.func,
  onIconClick: PropTypes.func,
};

const defaultProps = {
  children: undefined,
  isEdit: false,
  isDisabled: false,
  renderIcon: undefined,
  onIconClick: undefined,
};

const Viewline = ({ children, isDisabled, isEdit, renderIcon, onIconClick }) => (
  <ViewWrapper isDisabled={isDisabled} isEdit={isEdit} >
    <ViewContent>
      {children}
    </ViewContent>
    {renderIcon && (
      <ViewlineIcon isDisabled={isDisabled} renderIcon={renderIcon} onClick={onIconClick} />
    )}
  </ViewWrapper>
);

Viewline.propTypes = propTypes;
Viewline.defaultProps = defaultProps;

export default Viewline;
