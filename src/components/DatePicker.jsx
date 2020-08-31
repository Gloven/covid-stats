import React, { useState } from 'react';
import PropTypes from 'prop-types';
import DateFnsUtils from '@date-io/date-fns'; // choose your lib
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';

const CustomDatePicker = (props) => {
  const { onChange, label, name } = props;
  const [selectedDate, setDate] = useState(new Date());

  const handleDateChange = (date) => {
    setDate(date);
    onChange({ [name]: date.toISOString() });
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <DatePicker label={label} value={selectedDate} onChange={handleDateChange} animateYearScrolling />
    </MuiPickersUtilsProvider>
  );
};
CustomDatePicker.propTypes = {
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default CustomDatePicker;
