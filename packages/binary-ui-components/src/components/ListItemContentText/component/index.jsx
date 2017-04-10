import More from 'binary-ui-icons/binary/More';
import React from 'react';
import ListItemContentTextWrapper from '../components-styled/ListItemContentTextWrapper';
import ListItemContents from '../../ListItemContents';
import ActionListItemIcon from '../../ActionListItemIcon';

const propTypes = {
  isMoreButton: React.PropTypes.bool,
  text: React.PropTypes.string.isRequired,
  onMoreClick: React.PropTypes.func,
  IconComponent: React.PropTypes.func,
};

const defaultProps = {
  isMoreButton: true,
  onMoreClick: undefined,
  IconComponent: More,
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
    const { isMoreButton, text, IconComponent } = this.props;
    return (
      <ListItemContents isEdit={false} >
        {isMoreButton && (
          <ActionListItemIcon
            onClick={this.onMoreClick}
            IconComponent={IconComponent}
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
