import { CardsIconMore } from 'binary-ui-icons';
import React from 'react';
import ListItemTextareaWrapper from '../ListItemTextareaWrapper';
import TextareaInput from '../TextareaInput/index';
import ActionListItemIcon from '../../../ActionListItemIcon';

const propTypes = {
  isMoreButton: React.PropTypes.bool.isRequired,
  isValid: React.PropTypes.bool,
  value: React.PropTypes.string,
  onTextChange: React.PropTypes.func.isRequired,
  onMoreClick: React.PropTypes.func,
};

const defaultProps = {
  value: '',
  isMoreButton: false,
  isValid: true,
};

export default class Textarea extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
    };
    this.onTextChange = this.onTextChange.bind(this);
    this.onMoreClick = this.onMoreClick.bind(this);
    this.onSetFocus = this.onSetFocus.bind(this);
  }

  onTextChange(value) {
    const { onTextChange } = this.props;
    if (onTextChange) {
      onTextChange(value);
    }
  }

  onMoreClick() {
    const { onMoreClick } = this.props;
    if (onMoreClick) {
      onMoreClick();
    }
  }

  onSetFocus(isActive) {
    if (this.state.isActive === isActive) {
      return;
    }
    this.setState({
      isActive,
    });
  }

  render() {
    const {
      isMoreButton,
      isValid,
      onMoreClick,
      onTextChange,
      ...props,
    } = this.props;
    const { isActive } = this.state;
    return (
      <ListItemTextareaWrapper isTypingHighlight={isActive} isValid={isValid} >
        <TextareaInput
          multiline
          editable
          {...props}
          onChangeText={this.onTextChange}
          onSetFocus={this.onSetFocus}
        />
        {isMoreButton && (
          <ActionListItemIcon onClick={this.onMoreClick} IconComponent={CardsIconMore} />
        )}
      </ListItemTextareaWrapper>
    );
  }
}

Textarea.propTypes = propTypes;
Textarea.defaultProps = defaultProps;
