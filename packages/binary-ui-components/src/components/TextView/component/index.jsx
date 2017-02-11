import { CardsIconMore } from 'binary-ui-icons';
import React from 'react';
import TextContent from '../components-styled/TextContent';
import TextContentBlock from '../components-styled/TextContentBlock';
import TextWrapper from '../components-styled/TextWrapper';
import ActionListItemIcon from '../../ActionListItemIcon';

const propTypes = {
  children: React.PropTypes.any,
  isEdit: React.PropTypes.bool,
  isMoreButton: React.PropTypes.bool,
  onMoreClick: React.PropTypes.func,
};

const defaultProps = {
  isMoreButton: false,
};

export default class TextView extends React.Component {

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
    const { children, isEdit, isMoreButton } = this.props;
    const Content = typeof children === 'string'
      ? TextContent
      : TextContentBlock;
    return (
      <TextWrapper isEdit={isEdit}>
        <Content>
          {children}
        </Content>
        {isMoreButton && (
          <ActionListItemIcon onClick={this.onMoreClick} IconComponent={CardsIconMore} />
        )}
      </TextWrapper>
    );
  }
}

TextView.propTypes = propTypes;
TextView.defaultProps = defaultProps;
