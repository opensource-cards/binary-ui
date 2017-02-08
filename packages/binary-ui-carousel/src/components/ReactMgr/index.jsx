import React from 'react';
import Indicator from '../Indicator';
import ReactMgrRender from '../../components-styled/ReactMgrRender';
import ReactMgrIndicatorContainer from '../../components-styled/ReactMgrIndicatorContainer';
import ReactMgrNavigatableContainer from '../../components-styled/ReactMgrNavigatableContainer';
import ReactMgrListContainer from '../../components-styled/ReactMgrListContainer';
import ReactMgrItemContainer from '../../components-styled/ReactMgrItemContainer';
import ReactMgrButtonContainer from '../../components-styled/ReactMgrButtonContainer';
import { ICON_SIZE, INDICATOR_CONTAINER_HEIGHT } from '../../constants';
import mod from '../../utils/mod';

const propTypes = {
  children: React.PropTypes.arrayOf(
    React.PropTypes.node
  ).isRequired,
  containerHeight: React.PropTypes.number.isRequired,
  containerWidth: React.PropTypes.number.isRequired,
  margin: React.PropTypes.number.isRequired,
  pageWidth: React.PropTypes.number.isRequired,
  renderButtonLeft: React.PropTypes.func.isRequired,
  renderButtonRight: React.PropTypes.func.isRequired,
  selectedIndex: React.PropTypes.number.isRequired,
  onChangeIndex: React.PropTypes.func.isRequired,
};

const defaultProps = {};

export default class ReactMgr extends React.Component {

  constructor(props) {
    super(props);
    this.onBack = this.onBack.bind(this);
    this.onNext = this.onNext.bind(this);
  }

  onBack() {
    const { selectedIndex, onChangeIndex } = this.props;
    onChangeIndex(selectedIndex - 1);
  }

  onNext() {
    const { selectedIndex, onChangeIndex } = this.props;
    onChangeIndex(selectedIndex + 1);
  }

  render() {
    const {
      children,
      containerHeight,
      containerWidth,
      margin,
      pageWidth,
      renderButtonLeft,
      renderButtonRight,
      selectedIndex,
    } = this.props;
    const buttonWidth = (containerWidth - pageWidth - margin) / 2;
    const buttonMarginTop = (containerHeight - ICON_SIZE) / 2;
    const childrenLength = children.length;
    return (
      <ReactMgrRender
        style={{
          height: containerHeight + INDICATOR_CONTAINER_HEIGHT,
          width: containerWidth,
        }}
      >
        <ReactMgrNavigatableContainer
          style={{
            height: containerHeight,
            width: containerWidth,
          }}
        >
          <ReactMgrButtonContainer
            style={{
              height: containerHeight,
              width: buttonWidth,
            }}
          >
            {renderButtonLeft({
              style: { marginTop: buttonMarginTop },
              onClick: this.onBack,
            })}
          </ReactMgrButtonContainer>
          <ReactMgrListContainer
            style={{
              height: containerHeight,
              width: pageWidth + margin,
            }}
          >
            {[selectedIndex - 1, selectedIndex, selectedIndex + 1].map((itemIndex, index) => {
              const position = ((pageWidth + margin) * (index - 1));
              return (
                <ReactMgrItemContainer
                  key={itemIndex}
                  style={{
                    height: containerHeight,
                    transform: `translate3d(${position}px, 0, 0)`,
                    WebkiTransform: `translate3d(${position}px, 0, 0)`,
                    width: pageWidth,
                    marginLeft: margin / 2,
                    marginRight: margin / 2,
                  }}
                >
                  {children[mod(itemIndex, childrenLength)]}
                </ReactMgrItemContainer>
              );
            })}
          </ReactMgrListContainer>
          <ReactMgrButtonContainer
            style={{
              height: containerHeight,
              width: buttonWidth,
            }}
          >
            {renderButtonRight({
              style: { marginTop: buttonMarginTop },
              onClick: this.onNext,
            })}
          </ReactMgrButtonContainer>
        </ReactMgrNavigatableContainer>
        <ReactMgrIndicatorContainer style={{ width: containerWidth }}>
          <Indicator
            index={mod(selectedIndex, childrenLength)}
            count={childrenLength}
            width={containerWidth / 2}
          />
        </ReactMgrIndicatorContainer>
      </ReactMgrRender>
    );
  }
}

ReactMgr.defaultProps = defaultProps;
ReactMgr.propTypes = propTypes;
