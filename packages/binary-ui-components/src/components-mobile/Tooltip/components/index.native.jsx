import PropTypes from 'prop-types';
import React from 'react';
import { findNodeHandle, NativeModules, View } from 'react-native';
import TooltipStyled from '../components-styled/TooltipStyled';
import TooltipArrow from '../components-styled/TooltipArrow.native';
import TooltipText from '../components-styled/TooltipText.native';

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
      parentBoundingRect: undefined,
      targetBoundingRect: undefined,
    };
    this.cachedTargetDom = null;
    this.cachedWrapperDom = null;
    this.onRef = this.onRef.bind(this);
    this.onLayout = this.onLayout.bind(this);
  }

  componentWillReceiveProps(newProps) {
    const { target } = this.props;
    if (target !== newProps.target) {
      this.cachedTargetDom = this.getTarget(newProps.target);
      this.setTargetBoundingRect();
    }
  }

  onRef(node) {
    if (!node) {
      this.cachedTargetDom = null;
      this.cachedWrapperDom = null;
      this.setState(() => ({
        isReady: false,
        parentBoundingRect: undefined,
        targetBoundingRect: undefined,
      }));
      return;
    }
    const { target } = this.props;
    this.cachedTargetDom = this.getTarget(target);
    this.cachedWrapperDom = node;
    this.setState(() => ({
      isReady: true,
    }));
    this.setTargetBoundingRect();
    this.setParentBoundingRect();
  }

  onLayout() {
    // NOTE: recalculate positions of target and parent
    this.setTargetBoundingRect();
    this.setParentBoundingRect();
  }

  getTarget(target) {
    return findNodeHandle(target);
  }

  setParentBoundingRect() {
    requestAnimationFrame(() => {
      NativeModules.UIManager.measure(
        findNodeHandle(this.cachedWrapperDom),
        (fx, fy, width, height, px, py) => {
          this.setState(() => ({
            parentBoundingRect: { fx, fy, width, height, px, py },
          }));
        }
      );
    });
  }

  setTargetBoundingRect() {
    requestAnimationFrame(() => {
      NativeModules.UIManager.measure(
        findNodeHandle(this.cachedTargetDom),
        (fx, fy, width, height, px, py) => {
          this.setState(() => ({
            targetBoundingRect: { fx, fy, width, height, px, py },
          }));
        }
      );
    });
  }

  render() {
    const { isVisible, label, placement, target, ...props } = this.props;
    const { parentBoundingRect, targetBoundingRect } = this.state;
    if (!target || targetBoundingRect === undefined) {
      return null;
    }
    return (
      <View ref={this.onRef} onLayout={this.onLayout} >
        {parentBoundingRect ? (
          <TooltipStyled
            isVisible={isVisible}
            parentBoundingRect={parentBoundingRect}
            placement={placement}
            targetBoundingRect={targetBoundingRect}
            {...props}
          >
            <TooltipArrow placement={placement} />
            <TooltipText>
              {label}
            </TooltipText>
          </TooltipStyled>
        ) : null}
      </View>
    );
  }
}

Tooltip.propTypes = propTypes;
Tooltip.defaultProps = defaultProps;
