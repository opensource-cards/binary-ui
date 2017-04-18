import { BINARY_COLOR_GRAY_40 } from 'binary-ui-styles';
import React from 'react';
import ActionIconStyled from './components/ActionIconStyled';
import { isLeftButton } from '../../utils/events';

const propTypes = {
  isDisabled: React.PropTypes.bool,
  renderIcon: React.PropTypes.func.isRequired,
  onMouseEnter: React.PropTypes.func,
  onMouseLeave: React.PropTypes.func,
  onTapDown: React.PropTypes.func,
};

const defaultProps = {
  isDisabled: false,
  onMouseEnter: undefined,
  onMouseLeave: undefined,
  onTapDown: undefined,
};

export default class ActionListItemIcon extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
      isHover: false,
    };
    this.onTapUp = () => { this.onSetActive(false); };
    this.onSetActive = this.onSetActive.bind(this);
    this.onSetHover = this.onSetHover.bind(this);
  }

  componentDidMount() {
    window.addEventListener('mouseup', this.onTapUp);
    window.addEventListener('touchend', this.onTapUp);
  }

  componentWillUnmount() {
    window.removeEventListener('mouseup', this.onTapUp);
    window.removeEventListener('touchend', this.onTapUp);
  }

  onSetActive(isActive) {
    if (this.state.isActive === isActive) {
      return;
    }
    this.setState({
      isActive,
    });
  }

  onSetHover(isHover) {
    this.setState({
      isHover,
    });
  }

  render() {
    const {
      isDisabled,
      renderIcon,
      onMouseEnter,
      onMouseLeave,
      onTapDown,
      ...props,
    } = this.props;
    const { isActive, isHover } = this.state;
    return (
      <ActionIconStyled
        color={BINARY_COLOR_GRAY_40}
        isActive={isActive}
        isHover={isHover}
        isDisabled={isDisabled}
        size={18}
        renderIcon={renderIcon}
        onMouseDown={!isDisabled && ((e) => { if (isLeftButton(e)) { this.onSetActive(true); } if (onTapDown) { onTapDown(e); } })}
        onTouchStart={!isDisabled && ((e) => { this.onSetActive(true); if (onTapDown) { onTapDown(e); } })}
        onMouseEnter={!isDisabled && ((e) => { this.onSetHover(true); if (onMouseEnter) { onMouseEnter(e); } })}
        onMouseLeave={!isDisabled && ((e) => { this.onSetHover(false); if (onMouseLeave) { onMouseLeave(e); } })}
        {...props}
      />
    );
  }
}

ActionListItemIcon.propTypes = propTypes;
ActionListItemIcon.defaultProps = defaultProps;
