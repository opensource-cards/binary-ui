import { CardsIconMore } from 'binary-ui-icons';
import React from 'react';
import ListItemContentTextWrapper from '../components-styled/ListItemContentTextWrapper';
import ListItemContents from '../../ListItemContents';
import ActionListItemIcon from '../../ActionListItemIcon';

const propTypes = {
  isMoreButton: React.PropTypes.bool,
  text: React.PropTypes.string.isRequired,
  onMoreClick: React.PropTypes.func,
};

const defaultProps = {
  isMoreButton: true,
};

export default class ListItemContentText extends React.Component {

  constructor(props) {
    super(props);
    this.onMoreClick = this.onMoreClick.bind(this);
  }

  onMoreClick() {
    const { onMoreClick } = this.props;
    if (onMoreClick) {
      onMoreClick();
    }
  }

  render() {
    const { isMoreButton, text } = this.props;
    return (
      <ListItemContents isEdit={false} >
        {isMoreButton && (
          <ActionListItemIcon
            onClick={this.onMoreClick}
            IconComponent={CardsIconMore}
          />
        )}
        <ListItemContentTextWrapper>
          {text}
        </ListItemContentTextWrapper>
      </ListItemContents>
    );
  }
}

ListItemContentText.propTypes = propTypes;
ListItemContentText.defaultProps = defaultProps;
