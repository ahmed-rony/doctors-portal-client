import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { timeSlots } from '../../../InfoData.Config';
import '../BookingCard.css';
import { useForm } from 'react-hook-form';

 function AutoCompleteField() {
  const {
    register,
  } = useForm();
  return (
    <Autocomplete
    size="small"
    style={{margin: '0 auto'}}
    
    className='form-field' 
      options={timeSlots}
      autoHighlight
      getOptionLabel={(option) => option.time}
      renderOption={(props, option) => (
        <Box  component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
          
          {option.time}
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          
          {...params}
          label="Select Time"
          inputProps={{
            ...params.inputProps,
            autoComplete: 'new-password', // disable autocomplete and autofill
          }}
          {...register("select time", { required: true })}
        />
        
      )}
    />
  );
}

export default AutoCompleteField;