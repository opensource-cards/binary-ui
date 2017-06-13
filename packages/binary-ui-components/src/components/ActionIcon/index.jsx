import PropTypes from 'prop-types';
import React from 'react';
import ActionableIcon from '../ActionableIcon';
import { isLeftButton } from '../../utils/events';

const propTypes = {
  isDisabled: PropTypes.bool,
  renderIcon: PropTypes.func.isRequired,
  onTapDown: PropTypes.func,
};

const defaultProps = {
  isDisabled: false,
  onTapDown: undefined,
};

export default class ActionIcon extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
    };
    this.onTapUp = () => { this.onSetActive(false); };
    this.onSetActive = this.onSetActive.bind(this);
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

  render() {
    const {
      isDisabled,
      renderIcon,
      onTapDown,
      ...props,
    } = this.props;
    const { isActive } = this.state;
    return (
      <ActionableIcon
        isActive={isActive}
        isDisabled={isDisabled}
        renderIcon={renderIcon}
        onMouseDown={!isDisabled && ((e) => { if (isLeftButton(e)) { this.onSetActive(true); } if (onTapDown) { onTapDown(e); } })}
        onTouchStart={!isDisabled && ((e) => { this.onSetActive(true); if (onTapDown) { onTapDown(e); } })}
        {...props}
      />
    );
  }
}

ActionIcon.propTypes = propTypes;
ActionIcon.defaultProps = defaultProps;
