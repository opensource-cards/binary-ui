import PropTypes from 'prop-types';
import React from 'react';
import { findNodeHandle, Text, View } from 'react-native';
import { UIManager } from 'NativeModules';
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

  getTarget(target) {
    return findNodeHandle(target);
  }

  setParentBoundingRect() {
    setTimeout(() => {
      UIManager.measure(findNodeHandle(this.cachedWrapperDom), (fx, fy, width, height, px, py) => {
        this.setState(() => ({
          parentBoundingRect: { fx, fy, width, height, px, py },
        }));
      });
    }, 10);
  }

  setTargetBoundingRect() {
    setTimeout(() => {
      UIManager.measure(findNodeHandle(this.cachedTargetDom), (fx, fy, width, height, px, py) => {
        this.setState(() => ({
          targetBoundingRect: { fx, fy, width, height, px, py },
        }));
      });
    }, 10);
  }

  render() {
    const { isVisible, label, placement, target, ...props } = this.props;
    const { parentBoundingRect, targetBoundingRect } = this.state;
    if (!target || targetBoundingRect === undefined) {
      return null;
    }
    return (
      <View ref={this.onRef} >
        {parentBoundingRect ? (
          <TooltipStyled
            parentBoundingRect={parentBoundingRect}
            placement={placement}
            targetBoundingRect={targetBoundingRect}
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
