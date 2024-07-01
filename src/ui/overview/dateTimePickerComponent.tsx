import * as React from 'react';
import { DateTimePicker, DateTimePickerProps } from '@mui/x-date-pickers/DateTimePicker';
import TextField, { FilledTextFieldProps, OutlinedTextFieldProps, StandardTextFieldProps, TextFieldProps, TextFieldVariants } from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs, { Dayjs } from 'dayjs';





const DateTimePickerComponent = ({value,setValue}:any) => {
  // const [value, setValue] = React.useState<Dayjs | null>(dayjs());

  const handleChange = (newValue: Dayjs | null) => {
    setValue(newValue);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateTimePicker
        sx={{
          width: '100%',
          height: '39px',
          marginTop: '5px',
          outline: 'none',
          border: 'none',
          '& .MuiPickersLayout-root': {
            backgroundColor: 'red',
            color: '#fff',
          },
          '& .MuiInputBase-input': {
            color: '#fff',
            padding: '0.3rem 0.5rem',
            '::placeholder': {
              color: '#fff',
            },
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'transparent',
              outline: 'none',
            },
            '&:hover fieldset': {
              borderColor: 'transparent',
              outline: 'none',
            },
            '&.Mui-focused fieldset': {
              borderColor: 'transparent', // Change border color when focused
              outline: 'none',
            },
          },
          '& .MuiIconButton-root .MuiSvgIcon-root': {
            color: '#fff',
          },
        }}
        value={value}
        onChange={handleChange}
        // renderInput={(props: React.JSX.IntrinsicAttributes & { variant?: TextFieldVariants | undefined; } & Omit<FilledTextFieldProps | OutlinedTextFieldProps | StandardTextFieldProps, "variant">) => (
        //   <TextField
        //     sx={{
        //       outline: 'none',
        //       '& fieldset': {
        //         borderColor: 'transparent',
        //         outline: 'none',
        //       },
        //       '&:hover fieldset': {
        //         borderColor: 'transparent',
        //         outline: 'none',
        //       },
        //       '&.Mui-focused fieldset': {
        //         borderColor: 'transparent', // Change border color when focused
        //         outline: 'none',
        //       },
        //     }}
        //     {...props}
        //   />
        // )}
      />
    </LocalizationProvider>
  );
};

export default DateTimePickerComponent;


