import React from 'react';
import TextContent from '../components-styled/TextContent';
import TextContentBlock from '../components-styled/TextContentBlock';
import TextWrapper from '../components-styled/TextWrapper';
import ActionListItemIcon from '../../ActionListItemIcon';

const propTypes = {
  children: React.PropTypes.any,
  isEdit: React.PropTypes.bool,
  renderIcon: React.PropTypes.func,
  onMoreClick: React.PropTypes.func,
};

const defaultProps = {
  children: undefined,
  isEdit: false,
  renderIcon: undefined,
  onMoreClick: undefined,
};

export default class Text extends React.Component {

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
    const { children, isEdit, renderIcon } = this.props;
    const Content = typeof children === 'string'
      ? TextContent
      : TextContentBlock;
    return (
      <TextWrapper isEdit={isEdit}>
        <Content>
          {children}
        </Content>
        {renderIcon && (
          <ActionListItemIcon renderIcon={renderIcon} onClick={this.onMoreClick} />
        )}
      </TextWrapper>
    );
  }
}

Text.propTypes = propTypes;
Text.defaultProps = defaultProps;
