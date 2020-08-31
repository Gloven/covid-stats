import React, { useEffect, useState } from 'react';
import ApiClient from '../ApiClient';

const WorldPage = () => {
  const api = new ApiClient();

  async function getList(cb) {
    const data = await api.get('world');
    cb(data);
  }

  const [data, setData] = useState([]);

  useEffect(() => {
    getList(setData);
  }, []);

  return <h2>{data && JSON.stringify(data, null, 2)}</h2>;
};

export default WorldPage;
