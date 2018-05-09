import PropTypes from 'prop-types';
import React from 'react';
import TextareaInput from '../components-styled/TextareaInput';
import TextareaWrapperStyled from '../components-styled/TextareaWrapperStyled';
import ActionListItemIcon from '../../ActionListItemIcon';

const PADDING = 10;

const propTypes = {
  height: PropTypes.number,
  isAutoSize: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isValid: PropTypes.bool,
  value: PropTypes.string.isRequired,
  renderIcon: PropTypes.func,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onIconPress: PropTypes.func,
};

const defaultProps = {
  height: 120,
  isAutoSize: false,
  isDisabled: false,
  isValid: true,
  renderIcon: undefined,
  onBlur: undefined,
  onChange: undefined,
  onFocus: undefined,
  onIconPress: undefined,
};

export default class Textarea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      height: props.height,
      isActive: false,
    };
    this.onBlur = this.onBlur.bind(this);
    this.onContentSizeChange = this.onContentSizeChange.bind(this);
    this.onFocus = this.onFocus.bind(this);
  }

  onBlur(e) {
    const { onBlur } = this.props;
    this.setFocus(false);
    if (onBlur) {
      onBlur(e);
    }
  }

  onContentSizeChange(e) {
    const { isAutoSize } = this.props;
    if (!isAutoSize) {
      return;
    }
    if (this.state.height !== e.nativeEvent.contentSize.height) {
      this.setState({
        height: Math.max(this.props.height, e.nativeEvent.contentSize.height + 2 * PADDING),
      });
    }
  }

  onFocus(e) {
    const { onFocus } = this.props;
    this.setFocus(true);
    if (onFocus) {
      onFocus(e);
    }
  }

  setFocus(isActive) {
    if (this.state.isActive === isActive) {
      return;
    }
    this.setState(() => ({
      isActive,
    }));
  }

  render() {
    /* eslint-disable no-unused-vars */
    const {
      isAutoSize,
      isDisabled,
      isValid,
      renderIcon,
      onBlur,
      onChange,
      onFocus,
      onIconPress,
      ...props,
    } = this.props;
    /* eslint-enable no-unused-vars */
    const { height, isActive } = this.state;
    return (
      <TextareaWrapperStyled
        isEdit
        isTypingHighlight={isActive}
        isValid={isValid}
      >
        <TextareaInput
          {...props}
          editable={!isDisabled}
          multiline
          paddingBottom={0}
          paddingTop={0}
          styleHeight={height}
          stylePadding={PADDING}
          underlineColorAndroid="rgba(0, 0, 0, 0)"
          onBlur={this.onBlur}
          onChangeText={onChange}
          onContentSizeChange={this.onContentSizeChange}
          onFocus={this.onFocus}
        />
        {renderIcon ? (
          <ActionListItemIcon
            isDisabled={isDisabled}
            renderIcon={renderIcon}
            onPress={onIconPress}
          />
        ) : null}
      </TextareaWrapperStyled>
    );
  }
}

Textarea.propTypes = propTypes;
Textarea.defaultProps = defaultProps;
