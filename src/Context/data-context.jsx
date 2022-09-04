import axios from 'axios';
import { createContext, useContext, useState, useEffect } from 'react';

const DataContext = createContext(null);

const DataProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState('');
  const [filterData, setFilterData] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [check, setCheck] = useState({});

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(
          `https://api.github.com/users/facebook/repos?per_page=${rowsPerPage}&page=${page}`
        );
        setLoading(false);
        setData(data);
        setFilterData(data);
      } catch (error) {
        setError(error.name);
        setLoading(false);
      }
    })();
  }, [rowsPerPage, page]);

  return (
    <DataContext.Provider
      value={{
        data,
        loading,
        error,
        page,
        rowsPerPage,
        setPage,
        setRowsPerPage,
        filterData,
        setFilterData,
        check,
        setCheck,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
const useData = () => useContext(DataContext);

export { useData, DataProvider };
