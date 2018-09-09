
import PropTypes from 'prop-types';
import React from 'react';
import { withTheme } from 'styled-components';
import IconContainer from '../components-styled/IconContainer';
import TouchableContainer from '../components-styled/TouchableContainer';
import TouchableOpacity from '../components-styled/TouchableOpacity';

const propTypes = {
  color: PropTypes.string,
  isDisabled: PropTypes.bool,
  size: PropTypes.number,
  theme: PropTypes.object.isRequired,
  renderIcon: PropTypes.func.isRequired,
  onClick: PropTypes.func,
  onMouseDown: PropTypes.func,
  onTouchStart: PropTypes.func,
};

const defaultProps = {
  color: 'hsl(0, 0%, 0%)',
  isDisabled: false,
  size: 18,
  onClick: undefined,
  onMouseDown: undefined,
  onTouchStart: undefined,
};

class ActionIcon extends React.Component {
  renderIcon({ color, isDisabled, size, theme, renderIcon }) {
    return renderIcon({
      color,
      opacity: isDisabled ? theme.opacityDisabled : 1,
      size,
    });
  }

  render() {
    const {
      color,
      isDisabled,
      size,
      theme,
      renderIcon,
      onClick,
      onMouseDown,
      onTouchStart,
      ...props,
    } = this.props;
    return isDisabled ? (
      <div {...props} onClick={(e) => { e.preventDefault(); }} >
        <TouchableContainer size={size} >
          <IconContainer>
            {this.renderIcon({ color, isDisabled, size, theme, renderIcon })}
          </IconContainer>
        </TouchableContainer>
      </div>
    ) : (
      <TouchableOpacity
        {...props}
        activeOpacity={theme.opacityActive}
        onClick={onClick}
        onMouseDown={onMouseDown}
        onTouchStart={onTouchStart}
      >
        <TouchableContainer size={size} >
          <IconContainer>
            {this.renderIcon({ color, isDisabled, size, theme, renderIcon })}
          </IconContainer>
        </TouchableContainer>
      </TouchableOpacity>
    );
  }
}

ActionIcon.propTypes = propTypes;
ActionIcon.defaultProps = defaultProps;

export default withTheme(ActionIcon);
