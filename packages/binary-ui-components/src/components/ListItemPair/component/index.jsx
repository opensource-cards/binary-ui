import React from 'react';

const propTypes = {
  renderLeft: React.PropTypes.func,
  renderRight: React.PropTypes.func,
};

const defaultProps = {
  renderLeft: undefined,
  renderRight: undefined,
};

const ListItemPair = ({ renderLeft, renderRight }) => (
  <div>
    {renderLeft ? renderLeft() : null}
    {renderRight ? renderRight() : null}
  </div>
);

ListItemPair.defaultProps = defaultProps;
ListItemPair.propTypes = propTypes;
