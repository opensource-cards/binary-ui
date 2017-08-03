import { BINARY_COLOR_BLUE_40, BINARY_COLOR_GRAY_40 } from 'binary-ui-styles';
import PropTypes from 'prop-types';
import React from 'react';
import ActionButtonStyled from '../components-styled/ActionButtonStyled';
import ActionableIconWrapper from '../components-styled/ActionableIconWrapper';
import ActionButtonWrapper from '../components-styled/ActionButtonWrapper';
import IconStyled from '../../IconStyled';
import { getActionColorExt } from '../../../utils/styles-api';

const propTypes = {
  children: PropTypes.any,
  isActive: PropTypes.bool,
  isDisabled: PropTypes.bool,
  renderIconLeft: PropTypes.func,
  renderIconRight: PropTypes.func,
};

const defaultProps = {
  children: undefined,
  isActive: false,
  isDisabled: false,
  renderIconLeft: undefined,
  renderIconRight: undefined,
};

export default class ActionButtonContent extends React.Component {
  renderIcon(renderIcon) {
    const { isDisabled } = this.props;
    return (
      <ActionableIconWrapper>
        <IconStyled
          color={getActionColorExt(
            BINARY_COLOR_BLUE_40,
            BINARY_COLOR_GRAY_40,
            isDisabled
          )}
          isDisabled={isDisabled}
          renderIcon={renderIcon}
        />
      </ActionableIconWrapper>
    );
  }

  render() {
    const { children, renderIconLeft, renderIconRight, ...props } = this.props;
    return (
      <ActionButtonStyled {...props} >
        <ActionButtonWrapper>
          {renderIconLeft ? this.renderIcon(renderIconLeft) : null}
          {children}
          {renderIconRight ? this.renderIcon(renderIconRight) : null}
        </ActionButtonWrapper>
      </ActionButtonStyled>
    );
  }
}

ActionButtonContent.propTypes = propTypes;
ActionButtonContent.defaultProps = defaultProps;
