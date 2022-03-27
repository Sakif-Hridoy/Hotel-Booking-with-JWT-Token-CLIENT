import React, { useContext, useState } from 'react';
import '@date-io/date-fns';
import { Link, useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import Grid from '@material-ui/core/Grid';
import './Book.css';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { Button } from '@material-ui/core';

const Book = () => {
    const [loggedInUser,setLoggedInUser] = useContext(UserContext)
    const {bedType} = useParams();

    const [selectedDate, setSelectedDate] = useState({
      checkIn: new Date(),
      checkOut: new Date()
    });

    
  const handleCheckInDate = (date) => {
    const newDates = {...selectedDate};
    newDates.checkIn = date
    setSelectedDate(newDates);
  };

  const handleCheckOutDate = (date) => {
    const newDates = {...selectedDate};
    newDates.checkOut = date
    setSelectedDate(newDates);
  };

    return (
        <div style={{textAlign: 'center'}}>
            <h1>Hello {loggedInUser.name}, Let's book a {bedType} Room.</h1>
            <p>Want a <Link to="/home">different room?</Link> </p>

            
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justifyContent="space-between">
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="Date picker inline"
          value={selectedDate.checkIn}
          onChange={handleCheckInDate}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="Date picker dialog"
          format="MM/dd/yyyy"
          value={selectedDate.checkOut}
          onChange={handleCheckOutDate}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
      </Grid>
      <Button variant="contained" color="primary">
  Book Now
</Button>
    </MuiPickersUtilsProvider>
 

        </div>
    );
};

export default Book;