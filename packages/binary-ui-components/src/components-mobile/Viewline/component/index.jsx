import PropTypes from 'prop-types';
import React from 'react';
import ViewContent from '../components-styled/ViewContent';
import ViewWrapper from '../components-styled/ViewWrapper';
import ActionListItemIcon from '../../ActionListItemIcon';

const propTypes = {
  children: PropTypes.any,
  isDisabled: PropTypes.bool,
  isEdit: PropTypes.bool,
  renderIcon: PropTypes.func,
  onIconClick: PropTypes.func,
};

const defaultProps = {
  children: undefined,
  isDisabled: false,
  isEdit: false,
  renderIcon: undefined,
  onIconClick: undefined,
};

const Viewline = ({ children, isDisabled, isEdit, renderIcon, onIconClick }) => (
  <ViewWrapper isEdit={isEdit} >
    <ViewContent>
      {children}
    </ViewContent>
    {renderIcon ? (
      <ActionListItemIcon isDisabled={isDisabled} renderIcon={renderIcon} onClick={onIconClick} />
    ) : null}
  </ViewWrapper>
);

Viewline.propTypes = propTypes;
Viewline.defaultProps = defaultProps;

export default Viewline;
