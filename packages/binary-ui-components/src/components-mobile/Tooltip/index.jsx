import PropTypes from 'prop-types';
import React from 'react';
import TooltipStyled from './components-styled/TooltipStyled';
import TooltipWrapper from './components-styled/TooltipWrapper';

const propTypes = {
  isVisible: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  placement: PropTypes.oneOf(['bottom-right', 'bottom-left']),
  targetId: PropTypes.string.isRequired,
};

const defaultProps = {
  placement: 'bottom-right',
};

export default class Tooltip extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
    this.cachedTargetDom = null;
    this.cachedWrapperDom = null;
    this.onRef = this.onRef.bind(this);
  }

  componentWillReceiveProps(newProps) {
    const { targetId } = this.props;
    if (targetId !== newProps.targetId) {
      this.cachedTargetDom = this.getTarget(newProps.targetId);
    }
  }

  onRef(node) {
    if (!node) {
      this.cachedTargetDom = null;
      this.cachedWrapperDom = null;
      this.setState(() => ({
        isReady: false,
      }));
      return;
    }
    const { targetId } = this.props;
    this.cachedTargetDom = this.getTarget(targetId);
    this.cachedWrapperDom = node;
    this.setState(() => ({
      isReady: true,
    }));
  }

  getTarget(targetId) {
    return document.getElementById(targetId);
  }

  render() {
    const { isVisible, label, placement, ...props } = this.props;
    return (
      <TooltipWrapper innerRef={this.onRef} >
        {(this.cachedWrapperDom && this.cachedTargetDom) ? (
          <TooltipStyled
            isVisible={isVisible}
            parentDOM={this.cachedWrapperDom}
            placement={placement}
            targetDOM={this.cachedTargetDom}
            {...props}
          >
            {label}
          </TooltipStyled>
        ) : null}
      </TooltipWrapper>
    );
  }
}

Tooltip.propTypes = propTypes;
Tooltip.defaultProps = defaultProps;
