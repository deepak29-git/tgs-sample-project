import { createContext, useContext, useState, useEffect } from 'react';
import { getData } from '../getdata/getData';

const DataContext = createContext(null);

const DataProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState('');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [check, setCheck] = useState({});

  useEffect(() => {
    getData(setLoading, setData, setError,rowsPerPage,page);
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
