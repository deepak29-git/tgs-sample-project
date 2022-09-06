import { useState } from 'react';
import { useData } from '../../context/dataContext';
import { Modal } from '../modal/modal';
import { getFilter } from '../../utility/filter';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material';
import { tableHeaders } from '../../tableheaders/tableHeaders';
import { TableData } from '../tabledata/tableData';

export const ShowData = () => {
  const { data, loading, error, check } = useData();
  const [show, setShow] = useState(false);

  const finalData = getFilter(data, check);

  const tableHeadStyles = {
    '& .MuiTableCell-head': {
      fontWeight: 'bold',
      color: 'white',
      backgroundColor: 'black',
    },
  };

  return (
    <div data-testid="showdata">
      {loading && (
        <div className="center-text">
          <h3>Loading...</h3>
        </div>
      )}
      {error && (
        <div className="center-text">
          <h3>{error}</h3>
        </div>
      )}
      <Table border={1}>
        <TableHead sx={tableHeadStyles}>
          <TableRow>
            {tableHeaders.map(({ heading }, index) => (
              <TableCell key={index}>{heading}</TableCell>
            ))}
            <TableCell className="filter" onClick={() => setShow(!show)}>
              Filter
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {finalData.map((item) => (
            <TableData key={item.id} item={item} />
          ))}
        </TableBody>
      </Table>
      {show && <Modal />}
    </div>
  );
};
