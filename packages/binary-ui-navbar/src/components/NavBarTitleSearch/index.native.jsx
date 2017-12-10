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

const NavBarTitleSearch = ({ value, onChange, ...props }) => (
  <TitleSearchWrapper>
    <IconSearch
      color="#A9A9A9"
      margin={5}
      size={20}
    />
    <TitleSearchInput
      autoFocus
      clearButtonMode="always"
      placeholder="Search"
      returnKeyType="search"
      value={value}
      onChangeText={onChange}
      {...props}
    />
  </TitleSearchWrapper>
);

NavBarTitleSearch.propTypes = propTypes;
NavBarTitleSearch.defaultProps = defaultProps;

export default NavBarTitleSearch;
