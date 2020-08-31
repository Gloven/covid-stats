export const getUrlParams = (obj) => {
  const params = new URLSearchParams();

  Object.keys(obj).map((key) => (obj[key] ? params.append(key, obj[key]) : ''));
  const query = params.toString().length ? `?${params.toString()}` : '';

  return query;
};
