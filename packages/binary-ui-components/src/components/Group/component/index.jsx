import React from 'react';
import Divider from '../components-styled/Divider';
import Left from '../components-styled/Left';
import Right from '../components-styled/Right';
import Wrapper from '../components-styled/Wrapper';

const propTypes = {
  renderLeft: React.PropTypes.func,
  renderRight: React.PropTypes.func,
};

const defaultProps = {
  renderLeft: undefined,
  renderRight: undefined,
};

const Group = ({ renderLeft, renderRight }) => (
  <Wrapper>
    <Left>
     {renderLeft ? renderLeft() : null}
    </Left>
    <Divider />
    <Right>
     {renderRight ? renderRight() : null}
    </Right>
  </Wrapper>
);

Group.defaultProps = defaultProps;
Group.propTypes = propTypes;

export default Group;
