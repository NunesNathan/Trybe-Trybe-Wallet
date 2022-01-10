import React, { Component } from 'react';
import PropType from 'prop-types';

export default class Input extends Component {
  render() {
    const { id, test, value, placeholder, type, changeValue } = this.props;
    return (
      <label htmlFor={ id }>
        <input
          type={ type }
          name={ id }
          id={ id }
          data-testid={ `${test}` }
          defaultValue={ value }
          placeholder={ placeholder }
          onChange={ changeValue }
        />
      </label>
    );
  }
}

Input.propTypes = {
  id: PropType.string.isRequired,
  test: PropType.string.isRequired,
  value: PropType.string.isRequired,
  placeholder: PropType.string.isRequired,
  type: PropType.string.isRequired,
  changeValue: PropType.func.isRequired,
};
