import { BASEURL } from '../baseurl/baseUrl';

export const getData = async (
  setLoading,
  setData,
  setError,
  rowsPerPage,
  page
) => {
  try {
    setLoading(true);
    const response = await fetch(
      `${BASEURL}?per_page=${rowsPerPage}&page=${page}`
    );
    const data = await response.json();
    setLoading(false);
    setData(data);
  } catch (error) {
    setError(error.name);
    setLoading(false);
  }
};
