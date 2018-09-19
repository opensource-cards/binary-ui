import PropTypes from 'prop-types';
import React from 'react';
import RequiredIcon from '../components-styled/RequiredIcon';
import RequiredIconContainer from '../components-styled/RequiredIconContainer';
import Text from '../components-styled/Text';
import TextContainer from '../components-styled/TextContainer';
import Wrapper from '../components-styled/Wrapper';

const propTypes = {
  children: PropTypes.string,
  isBold: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isRequired: PropTypes.bool,
};

const defaultProps = {
  children: '',
  isBold: false,
  isDisabled: false,
  isRequired: false,
};

const Label = ({ children, isBold, isRequired, ...props }) => (
  <Wrapper {...props}>
    <TextContainer>
      <Text isBold={isBold}>
        {children}
      </Text>
    </TextContainer>
    {isRequired ? (
      <RequiredIconContainer>
        <RequiredIcon isBold={isBold}>*</RequiredIcon>
      </RequiredIconContainer>
    ) : null}
  </Wrapper>
);

Label.propTypes = propTypes;
Label.defaultProps = defaultProps;

export default Label;
