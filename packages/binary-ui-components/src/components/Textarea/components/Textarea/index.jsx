import autobind from 'autobind-decorator';
import { CardsIconMore } from 'binary-ui-icons';
import React from 'react';
import ListItemTextareaWrapper from '../ListItemTextareaWrapper';
import TextareaInput from '../TextareaInput/index';
import ActionListItemIcon from '../../../ActionListItemIcon';

const propTypes = {
  isMoreButton: React.PropTypes.bool.isRequired,
  isValid: React.PropTypes.bool,
  value: React.PropTypes.string,
  onBlur: React.PropTypes.func,
  onFocus: React.PropTypes.func,
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
  }

  @autobind
  onTextChange(e) {
    const { onTextChange } = this.props;
    if (onTextChange) {
      onTextChange(e.target.value);
    }
  }

  @autobind
  onMoreClick() {
    const { onMoreClick } = this.props;
    if (onMoreClick) {
      onMoreClick();
    }
  }

  @autobind
  onSetActiveStatus(isActive) {
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
      onBlur,
      onFocus,
      ...props,
    } = this.props;
    const { isActive } = this.state;
    return (
      <ListItemTextareaWrapper isTypingHighlight={isActive} isValid={isValid} >
        <TextareaInput
          onChange={this.onTextChange}
          onBlur={(e) => { this.onSetActiveStatus(false); if (onBlur) { onBlur(e); } }}
          onFocus={(e) => { this.onSetActiveStatus(true); if (onFocus) { onFocus(e); } }}
          {...props}
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
