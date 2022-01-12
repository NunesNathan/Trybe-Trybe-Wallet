import React, { Component } from 'react';
import PropType from 'prop-types';

export default class Select extends Component {
  render() {
    const { id, test, label, toMap, changeValue } = this.props;
    return (
      <label htmlFor={ id }>
        {`${label}: `}
        <select
          id={ id }
          name={ id }
          data-testid={ test }
          onChange={ changeValue }
        >
          {
            toMap.map((each) => (
              <option
                value={ each }
                key={ each }
              >
                { each }
              </option>))
          }
        </select>
      </label>
    );
  }
}

Select.propTypes = {
  id: PropType.string.isRequired,
  test: PropType.string.isRequired,
  label: PropType.string.isRequired,
  toMap: PropType.arrayOf(PropType.string).isRequired,
  changeValue: PropType.func.isRequired,
};
