import React from 'react';
import SectionWrapper from '../../components-styled/SectionWrapper';
import SectionContentWrapper from '../../components-styled/SectionContentWrapper';
import SectionTitle from '../../components-styled/SectionTitle';

const propTypes = {
  name: React.PropTypes.any.isRequired,
  children: React.PropTypes.node,
};

const defaultProps = {};

const Section = ({ name, children }) => (
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
