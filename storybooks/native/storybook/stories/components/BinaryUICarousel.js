import { ActionIcon } from 'binary-ui-components';
import { CardsIconArrowLeft, CardsIconArrowRight } from 'binary-ui-icons';
import React from 'react';
import { Dimensions, Text, View } from 'react-native';
import ReactMgr from 'binary-ui-carousel';

const PAGE_WIDTH = Dimensions.get('window').width;
const CAROUSEL_SIZE_MARGIN = 10;
const CAROUSEL_SIZE_MSIDE_ITEMS = 20;
const cardDesigns = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];
export function getCardWidth(containerWidth) {
  return containerWidth - 2 * CAROUSEL_SIZE_MARGIN - 2 * CAROUSEL_SIZE_MSIDE_ITEMS;
}
export function getCarouselMargin() {
  return CAROUSEL_SIZE_MARGIN;
}

const styles = {
  flex: 1,
  backgroundColor: 'red',
};

export default class Welcome extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
    };
    this.onSetCardDesignId = this.onSetCardDesignId.bind(this);
  }

  onSetCardDesignId(selectedIndex) {
    this.setState({
      selectedIndex,
    });
  }

  render() {
    return (
      <ReactMgr
        containerHeight={200}
        containerWidth={PAGE_WIDTH}
        margin={getCarouselMargin()}
        pageWidth={getCardWidth(PAGE_WIDTH)}
        renderButtonLeft={props => (
          <ActionIcon title="Left" IconComponent={CardsIconArrowLeft} {...props} />
        )}
        renderButtonRight={props => (
          <ActionIcon title="Left" IconComponent={CardsIconArrowRight} {...props} />
        )}
        selectedIndex={this.state.selectedIndex}
        onChangeIndex={this.onSetCardDesignId}
      >
        {cardDesigns.map(cardDesign => (
          <View key={cardDesign.id} style={styles} >
            <Text>Lol</Text>
          </View>
        ))}
      </ReactMgr>
    );
  }
}
