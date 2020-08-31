import React, { useState } from 'react';
import PropTypes from 'prop-types';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const Dropdown = (props) => {
  const { onChange, label, data, name } = props;

  const [value, setValue] = useState(data[0].value);

  const handleChange = (e) => {
    const val = e.target.value;
    setValue(val);
    onChange({ [name]: val });
  };

  return (
    <FormControl>
      <InputLabel id="select-label">{label}</InputLabel>
      <Select labelId="select-label" id="select" value={value} onChange={handleChange}>
        {data.map((item) => (
          <MenuItem key={item.value} value={item.value}>
            {item.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
Dropdown.propTypes = {
  data: PropTypes.arrayOf.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Dropdown;
