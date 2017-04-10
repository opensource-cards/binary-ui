import More from 'binary-ui-icons/binary/More';
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
  IconComponent: React.PropTypes.func,
};

const defaultProps = {
  children: undefined,
  isEdit: false,
  isMoreButton: false,
  onMoreClick: undefined,
  IconComponent: More,
};

export default class TextView extends React.Component {

  constructor(props) {
    super(props);
    this.onMoreClick = this.onMoreClick.bind(this);
  }

  onMoreClick() {
    const { onMoreClick } = this.props;
    if (!onMoreClick) {
      return;
    }
    onMoreClick();
  }

  render() {
    const { children, isEdit, isMoreButton, IconComponent } = this.props;
    const Content = typeof children === 'string'
      ? TextContent
      : TextContentBlock;
    return (
      <TextWrapper isEdit={isEdit}>
        <Content>
          {children}
        </Content>
        {isMoreButton && (
          <ActionListItemIcon onClick={this.onMoreClick} IconComponent={IconComponent} />
        )}
      </TextWrapper>
    );
  }
}

TextView.propTypes = propTypes;
TextView.defaultProps = defaultProps;
