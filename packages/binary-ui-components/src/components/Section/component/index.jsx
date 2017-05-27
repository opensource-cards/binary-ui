import PropTypes from 'prop-types';
import React from 'react';
import SectionWrapper from '../components-styled/SectionWrapper';
import SectionContentWrapper from '../components-styled/SectionContentWrapper';
import SectionTitle from '../components-styled/SectionTitle';

const propTypes = {
  children: PropTypes.node,
  label: PropTypes.string.isRequired,
};

const defaultProps = {
  children: undefined,
};

const Section = ({ children, label }) => (
  <SectionWrapper>
    <SectionTitle>
      {label.toUpperCase()}
    </SectionTitle>
    <SectionContentWrapper>
      {children}
    </SectionContentWrapper>
  </SectionWrapper>
);

Section.propTypes = propTypes;
Section.defaultProps = defaultProps;

export default Section;
