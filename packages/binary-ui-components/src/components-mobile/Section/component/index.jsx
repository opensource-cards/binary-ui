import PropTypes from 'prop-types';
import React from 'react';
import SectionWrapper from '../components-styled/SectionWrapper';
import SectionContentWrapper from '../components-styled/SectionContentWrapper';
import SectionTitleWrapper from '../components-styled/SectionTitleWrapper';
import SectionTitleText from '../components-styled/SectionTitleText';

const propTypes = {
  children: PropTypes.node,
  label: PropTypes.string.isRequired,
};

const defaultProps = {
  children: undefined,
};

const Section = ({ children, label }) => (
  <SectionWrapper>
    <SectionTitleWrapper>
      <SectionTitleText>
        {label.toUpperCase()}
      </SectionTitleText>
    </SectionTitleWrapper>
    <SectionContentWrapper>
      {children}
    </SectionContentWrapper>
  </SectionWrapper>
);

Section.propTypes = propTypes;
Section.defaultProps = defaultProps;

export default Section;
