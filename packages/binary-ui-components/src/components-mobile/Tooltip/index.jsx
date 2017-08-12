import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';
import TooltipStyled from './components-styled/TooltipStyled';
import TooltipWrapper from './components-styled/TooltipWrapper';

const propTypes = {
  isVisible: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  placement: PropTypes.oneOf(['bottom-right', 'bottom-left']),
  target: PropTypes.object,
};

const defaultProps = {
  placement: 'bottom-right',
  target: undefined,
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
    const { target } = this.props;
    if (target !== newProps.target) {
      this.cachedTargetDom = this.getTarget(newProps.target);
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
    const { target } = this.props;
    this.cachedTargetDom = this.getTarget(target);
    this.cachedWrapperDom = node;
    this.setState(() => ({
      isReady: true,
    }));
  }

  getTarget(target) {
    return ReactDOM.findDOMNode(target);
  }

  render() {
    const { isVisible, label, placement, target, ...props } = this.props;
    if (!target) {
      return null;
    }
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
