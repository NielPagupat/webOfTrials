import * as React from 'react';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';

export default function ResponsiveDatePickers({chooseValue}) {
    let today = new Date().toISOString().slice(0, 10)
    const [dateValue, setDateValue] = React.useState(dayjs(today))
    const chkDate = (newValue) =>{
        let date = new Date(newValue)
        chooseValue(date.getFullYear() + "/" + (date.getMonth()+1) + "/" + date.getDate())
    }

   
    
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer
        components={[
          'DatePicker',
          'MobileDatePicker',
          'DesktopDatePicker',
          'StaticDatePicker',
        ]}
      >
        <DemoItem label="Desktop variant">
          <DesktopDatePicker defaultValue={dateValue} onChange={chkDate}/>
        </DemoItem>
        <DemoItem label="Mobile variant">
          <MobileDatePicker defaultValue={dateValue} onChange={chkDate}/>
        </DemoItem>
        <DemoItem label="Responsive variant">
          <DatePicker defaultValue={dateValue} onChange={chkDate}/>
        </DemoItem>
        <DemoItem label="Static variant">
          <StaticDatePicker defaultValue={dateValue} onChange={chkDate}/>
        </DemoItem>
      </DemoContainer>
    </LocalizationProvider>
  );
}
