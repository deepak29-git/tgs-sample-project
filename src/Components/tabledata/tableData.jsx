import { TableRow, TableCell } from '@mui/material';
export const TableData = ({ item }) => {
  const { id, name, full_name, license } = item;
  return (
    <TableRow>
      <TableCell>{id}</TableCell>
      <TableCell>{name}</TableCell>
      <TableCell>{full_name}</TableCell>
      <TableCell>{license?.name}</TableCell>
    </TableRow>
  );
};
