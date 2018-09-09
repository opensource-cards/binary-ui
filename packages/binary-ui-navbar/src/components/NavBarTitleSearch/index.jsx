import IconSearch from 'binary-ui-icons/binary/Search';
import PropTypes from 'prop-types';
import React from 'react';
import TitleSearchInput from './components-styled/TitleSearchInput';
import TitleSearchWrapper from './components-styled/TitleSearchWrapper';

const propTypes = {
  autoCorrect: PropTypes.bool,
  autoFocus: PropTypes.bool,
  isBold: PropTypes.bool,
  isValid: PropTypes.bool,
  placeholder: PropTypes.string,
  styleBorderColor: PropTypes.string,
  styleFontColor: PropTypes.string,
  value: PropTypes.string.isRequired,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  renderIcon: PropTypes.func,
};

const defaultProps = {
  autoCorrect: undefined,
  autoFocus: false,
  isBold: false,
  isValid: true,
  placeholder: '',
  styleBorderColor: 'hsla(0, 0%, 0%, 0.15)',
  styleFontColor: 'hsl(0, 0%, 0%)',
  onBlur: undefined,
  onChange: undefined,
  onFocus: undefined,
  renderIcon: (props) => (<IconSearch {...props} />),
};

class NavBarTitleSearch extends React.Component {
  constructor(props) {
    super(props);
    this.focus = this.focus.bind(this);
    this.inputRef = undefined;
    this.state = {
      isActive: false,
    };
    this.onBlur = this.onBlur.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.onInputRef = this.onInputRef.bind(this);
  }

  onBlur(e) {
    const { onBlur } = this.props;
    this.setFocus(false);
    if (onBlur) {
      onBlur(e);
    }
  }

  onChange(e) {
    const { onChange } = this.props;
    if (!onChange) {
      return;
    }
    onChange(e.target.value);
  }

  onFocus(e) {
    const { onFocus } = this.props;
    this.setFocus(true);
    if (onFocus) {
      onFocus(e);
    }
  }

  onInputRef(inputRef) {
    this.inputRef = inputRef;
  }

  setFocus(isActive) {
    if (this.state.isActive === isActive) {
      return;
    }
    this.setState(() => ({
      isActive,
    }));
  }

  focus() {
    if (!this.inputRef) {
      return;
    }
    this.inputRef.focus();
  }

  render() {
    // Note: No need to pass 'onBlur', 'onChange' and 'onFocus' handlers.
    /* eslint-disable no-unused-vars */
    const {
      autoCorrect,
      isValid,
      styleBorderColor,
      onBlur,
      onChange,
      onFocus,
      renderIcon,
      ...props,
    } = this.props;
    /* eslint-enable no-unused-vars */
    const { isActive } = this.state;
    return (
      <TitleSearchWrapper
        isEdit
        isTypingHighlight={isActive}
        isValid={isValid}
        styleBorderColor={styleBorderColor}
      >
        {renderIcon({ color: '#A9A9A9', size: 20 })}
        <TitleSearchInput
          {...props}
          innerRef={this.onInputRef}
          type="search"
          onBlur={this.onBlur}
          onChange={this.onChange}
          onFocus={this.onFocus}
        />
      </TitleSearchWrapper>
    );
  }
}

NavBarTitleSearch.propTypes = propTypes;
NavBarTitleSearch.defaultProps = defaultProps;

export default NavBarTitleSearch;
