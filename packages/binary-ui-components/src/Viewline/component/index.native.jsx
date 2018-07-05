import PropTypes from 'prop-types';
import React from 'react';
import ViewContent from '../components-styled/ViewContent';
import ViewWrapper from '../components-styled/ViewWrapper';
import ActionListItemIcon from '../../ActionListItemIcon';

const propTypes = {
  children: PropTypes.any,
  isDisabled: PropTypes.bool,
  isEdit: PropTypes.bool,
  isValid: PropTypes.bool,
  styleBackgroundColor: PropTypes.string,
  renderIcon: PropTypes.func,
  onIconPress: PropTypes.func,
};

const defaultProps = {
  children: undefined,
  isDisabled: false,
  isEdit: false,
  isValid: true,
  styleBackgroundColor: '#ffffff',
  renderIcon: undefined,
  onIconPress: undefined,
};

const Viewline = ({
  children,
  isDisabled,
  isEdit,
  isValid,
  styleBackgroundColor,
  renderIcon,
  onIconPress,
}) => (
  <ViewWrapper isEdit={isEdit} isValid={isValid} styleBackgroundColor={styleBackgroundColor} >
    <ViewContent>
      {children}
    </ViewContent>
    {renderIcon ? (
      <ActionListItemIcon isDisabled={isDisabled} renderIcon={renderIcon} onPress={onIconPress} />
    ) : null}
  </ViewWrapper>
);

Viewline.propTypes = propTypes;
Viewline.defaultProps = defaultProps;

export default Viewline;
