import React from 'react';
import SectionWrapper from '../components-styled/SectionWrapper';
import SectionContentWrapper from '../components-styled/SectionContentWrapper';
import SectionTitle from '../components-styled/SectionTitle';

const propTypes = {
  children: React.PropTypes.node,
  name: React.PropTypes.string.isRequired,
};

const defaultProps = {
  children: undefined,
};

const Section = ({ children, name }) => (
  <SectionWrapper>
    <SectionTitle>
      {name.toUpperCase()}
    </SectionTitle>
    <SectionContentWrapper>
      {children}
    </SectionContentWrapper>
  </SectionWrapper>
);

Section.propTypes = propTypes;
Section.defaultProps = defaultProps;

export default Section;
