import autobind from 'autobind-decorator';
import { CardsIconMore } from 'binary-ui-icons';
import React from 'react';
import ListItemTextareaWrapper from '../ListItemTextareaWrapper';
import TextareaInput from '../TextareaInput/index';
import ActionListItemIcon from '../../../ActionListItemIcon';
import { isEmpty } from '../../../../utils/string';

const propTypes = {
  getIsValid: React.PropTypes.func,
  id: React.PropTypes.any,
  isMoreButton: React.PropTypes.bool.isRequired,
  isRequired: React.PropTypes.bool,
  isSubmitted: React.PropTypes.bool,
  style: React.PropTypes.object,
  value: React.PropTypes.string,
  onTextChange: React.PropTypes.func.isRequired,
  onMoreClick: React.PropTypes.func,
};

const defaultProps = {
  value: '',
  isMoreButton: false,
  isSubmitted: false,
};

export default class Textarea extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
      isValid: true,
    };
  }

  componentWillReceiveProps(nextProps) {
    const { isSubmitted } = this.props;
    if (isSubmitted !== nextProps.isSubmitted && nextProps.isSubmitted === true) {
      this.onSubmit();
    }
  }

  @autobind
  onTextChange(value) {
    const { id, onTextChange } = this.props;
    if (onTextChange) {
      onTextChange(id, value);
    }
  }

  @autobind
  onMoreClick() {
    const { id, onMoreClick } = this.props;
    if (onMoreClick) {
      onMoreClick(id);
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

  onSubmit() {
    this.setState({
      isValid: this.isValid(),
    });
  }

  isRequiredValid() {
    const { isRequired, value } = this.props;
    return isRequired && isEmpty(value);
  }

  isValid() {
    if (!this.isRequiredValid()) {
      return false;
    }
    const { getIsValid } = this.props;
    if (getIsValid) {
      return getIsValid();
    }
    return true;
  }

  render() {
    const {
      isMoreButton,
      isRequired,
      isSubmitted,
      onMoreClick,
      onTextChange,
      ...props,
    } = this.props;
    const { isActive, isValid } = this.state;
    return (
      <ListItemTextareaWrapper isTypingHighlight={isActive} isValid={isValid} >
        <TextareaInput
          multiline
          editable
          {...props}
          onChangeText={this.onTextChange}
          onSetActiveStatus={this.onSetActiveStatus}
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
