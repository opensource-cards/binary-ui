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
  styleFontSize: PropTypes.string,
};

const defaultProps = {
  children: '',
  isBold: false,
  isDisabled: false,
  isRequired: false,
  styleFontSize: '16px',
};

const Label = ({ children, isBold, isRequired, styleFontSize, ...props }) => (
  <Wrapper {...props}>
    <TextContainer isRequired={isRequired}>
      <Text isBold={isBold} styleFontSize={styleFontSize}>
        {children}
      </Text>
    </TextContainer>
    {isRequired ? (
      <RequiredIconContainer>
        <RequiredIcon isBold={isBold} styleFontSize={styleFontSize}>*</RequiredIcon>
      </RequiredIconContainer>
    ) : null}
  </Wrapper>
);

Label.propTypes = propTypes;
Label.defaultProps = defaultProps;

export default Label;
