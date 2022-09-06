import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import { useData } from '../../context/dataContext';

export const Modal = () => {
  const { data, setCheck, check } = useData();
  const licenseData = data
    .map((item) => item?.license?.name)
    .filter((item, i, arr) => arr.indexOf(item) === i)
    .filter((item) => item !== undefined);

  const listStyle = {
    maxWidth: 360,
    bgcolor: 'background.paper',
    position: 'absolute',
    top: '3.6rem',
    right: '0',
  };

  const changeHandler = (e) => {
    const clickedItem = e.target.value;
    const checked = e.target.checked;
    setCheck({ ...check, [clickedItem]: checked });
  };

  return (
    <List data-testid="modal" sx={listStyle}>
      {licenseData.map((item) => {
        const labelId = `checkbox-list-label-${item}`;

        return (
          <ListItem key={item}>
            <ListItemButton role={undefined} dense>
              <ListItemIcon>
                <Checkbox value={item} onChange={(e) => changeHandler(e)} />
              </ListItemIcon>
              <ListItemText id={labelId} primary={item} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
};
