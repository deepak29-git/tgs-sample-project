export const getFilter = (data, check) => {
  const values = Object.values(check).reduce((acc, curr) => acc || curr, false);
  if (values) {
    return data.filter((item) => check[item?.license?.name]);
  }
  return data;
};
