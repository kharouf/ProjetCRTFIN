
import * as React from 'react';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDateTimePicker } from '@mui/x-date-pickers/StaticDateTimePicker';

const Date = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
    <StaticDateTimePicker orientation="landscape" />
  </LocalizationProvider>
  )
}

export default Date


