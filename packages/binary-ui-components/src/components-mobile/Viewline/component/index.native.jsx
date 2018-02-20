import PropTypes from 'prop-types';
import React from 'react';
import ViewContent from '../components-styled/ViewContent';
import ViewWrapper from '../components-styled/ViewWrapper';
import ActionListItemIcon from '../../ActionListItemIcon';

const propTypes = {
  children: PropTypes.any,
  isEdit: PropTypes.bool,
  renderIcon: PropTypes.func,
  onIconPress: PropTypes.func,
};

const defaultProps = {
  children: undefined,
  isEdit: false,
  renderIcon: undefined,
  onIconPress: undefined,
};

const Viewline = ({ children, isEdit, renderIcon, onIconPress }) => (
  <ViewWrapper isEdit={isEdit} >
    <ViewContent>
      {children}
    </ViewContent>
    {renderIcon && (
      <ActionListItemIcon renderIcon={renderIcon} onPress={onIconPress} />
    )}
  </ViewWrapper>
);

Viewline.propTypes = propTypes;
Viewline.defaultProps = defaultProps;

export default Viewline;
