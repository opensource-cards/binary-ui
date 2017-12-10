import IconSearch from 'binary-ui-icons/binary/Search';
import PropTypes from 'prop-types';
import React from 'react';
import TitleSearchInput from './components-styled/TitleSearchInput';
import TitleSearchWrapper from './components-styled/TitleSearchWrapper';

const propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

const defaultProps = {
  onChange: undefined,
};

class NavBarTitleSearch extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    const { onChange } = this.props;
    if (!onChange) {
      return;
    }
    onChange(e.target.value);
  }

  render() {
    // Note: No need to pass 'onChange' handler.
    /* eslint-disable no-unused-vars */
    const { value, onChange, ...props } = this.props;
    /* eslint-enable no-unused-vars */
    return (
      <TitleSearchWrapper>
        <IconSearch color="#A9A9A9" size={20} />
        <TitleSearchInput
          autoFocus
          placeholder="Search"
          type="search"
          value={value}
          onChange={this.onChange}
          {...props}
        />
      </TitleSearchWrapper>
    );
  }
}

NavBarTitleSearch.propTypes = propTypes;
NavBarTitleSearch.defaultProps = defaultProps;

export default NavBarTitleSearch;
