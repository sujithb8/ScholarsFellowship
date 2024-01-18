import * as React from 'react';
import {useState,useEffect} from 'react';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useSelector } from 'react-redux';
import { useTheme } from '@emotion/react';

const SelectComponent =(handleChangeStatus,status) => {
      const { user } = useSelector(state => state.userProfile);
      const{palette} = useTheme();
  const [selectedValue, setSelectedValue] = useState('');

  useEffect(() => {
    // This effect runs every time the component mounts and when `props.data` changes
    if (user && user.univShortlist.applicationStatus > 0) {
      // Automatically select the first item when the data updates
      setSelectedValue(user.univShortlist.applicationStatus[0]);
    }
  }, [user, user.univShortlist.applicationStatus]);



    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
    <Select
                    inputProps={{
                        MenuProps: {
                            MenuListProps: {
                                sx: {
                                    backgroundColor: palette.secondary.main
                                }
                            }
                        }
                    }}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={status}
                    label="Category"
                    onChange={handleChangeStatus}
                >
                    <MenuItem value="">All</MenuItem>
                    {
                        user && user.univShortlist.applicationStatus.map(jt => (
                            <MenuItem key={jt._id} value={jt._id}>{jt.jobTypeName}</MenuItem>
                        ))
                    }


                </Select>
      <p>Selected: {selectedValue}</p>
            </FormControl>
        </Box>
    )
}


export default SelectComponent