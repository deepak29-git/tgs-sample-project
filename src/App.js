import { ShowData } from './Components/ShowData/ShowData';
import { TablePagination } from '@mui/material';
import { useData } from './Context/data-context';
import './App.css';

function App() {
  const { setPage, setRowsPerPage, page, rowsPerPage } = useData();

  const handlePageChange = (e, newPage) => {
    setPage(newPage);
  };

  const handlerChangeDataPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  return (
    <div className="App">
      <ShowData />
      <TablePagination
        count={100}
        component="div"
        onPageChange={handlePageChange}
        page={page}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handlerChangeDataPerPage}
      />
    </div>
  );
}

export default App;
