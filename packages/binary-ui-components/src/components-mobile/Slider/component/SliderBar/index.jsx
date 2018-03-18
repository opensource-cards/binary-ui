import PropTypes from 'prop-types';
import React from 'react';
import InputRange from '../../components-styled/InputRange';

const propTypes = {
  position: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

const defaultProps = {};

export default class SliderBar extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    const { onChange } = this.props;
    onChange(Number(e.target.value));
  }

  render() {
    const { position, ...props } = this.props;
    return (
      <InputRange
        {...props}
        min="0"
        max="100"
        type="range"
        value={position}
        onChange={this.onChange}
      />
    );
  }
}

SliderBar.propTypes = propTypes;
SliderBar.defaultProps = defaultProps;
