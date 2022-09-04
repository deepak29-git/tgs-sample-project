import { useState } from 'react';
import { useData } from '../../Context/data-context';
import { Modal } from '../Modal/Modal';
import { getFilter } from '../../Utility/filter';
import '../ShowData/ShowData.css'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material';

export const ShowData = () => {
  const { data, loading, error, check } = useData();
  const [show, setShow] = useState(false);

  const filterHandler = () => {
    setShow(!show);
  };

  const tableHeadStyles = {
    '& .MuiTableCell-head': {
      fontWeight: 'bold',
      color: 'white',
      backgroundColor: 'black',
    },
  };
  const finalData = getFilter(data, check);

  return (
    <div data-testid="showdata">
      {loading && <div className='center-text'><h3>Loading...</h3></div>}
      {error && <div className='center-text'><h3>{error}</h3></div>}
      <Table border={1}>
        <TableHead sx={tableHeadStyles}>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Full Name</TableCell>
            <TableCell>License Name</TableCell>
            <TableCell className="filter" onClick={filterHandler}>
              filter
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {finalData.map(({ id, name, full_name, license }) => (
            <TableRow key={id}>
              <TableCell>{id}</TableCell>
              <TableCell>{name}</TableCell>
              <TableCell>{full_name}</TableCell>
              <TableCell>{license?.name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {show && <Modal />}
    </div>
  );
};
