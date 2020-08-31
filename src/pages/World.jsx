import React, { useState } from 'react';
import ApiClient from '../ApiClient';
import DatePicker from '../components/DatePicker';
import Dropdown from '../components/Dropdown';
import { FILTERS } from '../constants';
import { getUrlParams } from '../utils';

const WorldPage = () => {
  const api = new ApiClient();

  async function getList(cb, query = '') {
    const data = await api.get('world', query);
    cb(data);
  }

  const [data, setData] = useState([]);
  const [searchParams, setSearchParams] = useState({ from: '', to: '', case: '' });

  const handleChange = (payload) => {
    const newState = { ...searchParams, ...payload };

    setSearchParams(newState);
    const params = getUrlParams(newState);
    getList(setData, params);
  };

  console.log(data);

  return (
    <div>
      <DatePicker label="Date from" name="from" onChange={handleChange} />
      <DatePicker label="Date to" name="to" onChange={handleChange} />
      <Dropdown data={FILTERS} name="case" label="Select case" onChange={handleChange} />
    </div>
  );
};

export default WorldPage;
