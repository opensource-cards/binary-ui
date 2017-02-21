import React from 'react';
import ActionableIcon from '../../ActionableIcon';
import { isLeftButton } from '../../../utils/events';

const propTypes = {
  color: React.PropTypes.string,
  size: React.PropTypes.number,
  isDisabled: React.PropTypes.bool,
  onMouseEnter: React.PropTypes.func,
  onMouseLeave: React.PropTypes.func,
  onTapDown: React.PropTypes.func,
};

const defaultProps = {};

export default class ActionIcon extends React.Component {

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
      onMouseEnter,
      onMouseLeave,
      onTapDown,
      ...props,
    } = this.props;
    const { isActive, isHover } = this.state;
    return (
      <ActionableIcon
        isActive={isActive}
        isHover={isHover}
        isDisabled={isDisabled}
        onMouseDown={!isDisabled && ((e) => { if (isLeftButton(e)) { this.onSetActive(true); } if (onTapDown) { onTapDown(e); } })}
        onTouchStart={!isDisabled && ((e) => { this.onSetActive(true); if (onTapDown) { onTapDown(e); } })}
        onMouseEnter={!isDisabled && ((e) => { this.onSetHover(true); if (onMouseEnter) { onMouseEnter(e); } })}
        onMouseLeave={!isDisabled && ((e) => { this.onSetHover(false); if (onMouseLeave) { onMouseLeave(e); } })}
        {...props}
      />
    );
  }
}

ActionIcon.propTypes = propTypes;
ActionIcon.defaultProps = defaultProps;
