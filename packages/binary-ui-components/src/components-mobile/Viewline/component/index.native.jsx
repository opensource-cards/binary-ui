import PropTypes from 'prop-types';
import React from 'react';
import ViewContent from '../components-styled/ViewContent';
import ViewWrapper from '../components-styled/ViewWrapper';
import ViewlineIcon from '../components-styled/ViewlineIcon';
import { getActionOpacityExt } from '../../../utils/styles-api';

const propTypes = {
  children: PropTypes.any,
  isDisabled: PropTypes.bool,
  isEdit: PropTypes.bool,
  renderIcon: PropTypes.func,
  onIconPress: PropTypes.func,
};

const defaultProps = {
  children: undefined,
  isEdit: false,
  isDisabled: false,
  renderIcon: undefined,
  onIconPress: undefined,
};

const Viewline = ({ children, isDisabled, isEdit, renderIcon, onIconPress }) => (
  <ViewWrapper
    isEdit={isEdit}
    styleOpacity={getActionOpacityExt(false, isDisabled)}
  >
    <ViewContent>
      {children}
    </ViewContent>
    {renderIcon && (
      <ViewlineIcon isDisabled={isDisabled} renderIcon={renderIcon} onPress={onIconPress} />
    )}
  </ViewWrapper>
);

Viewline.propTypes = propTypes;
Viewline.defaultProps = defaultProps;

export default Viewline;
