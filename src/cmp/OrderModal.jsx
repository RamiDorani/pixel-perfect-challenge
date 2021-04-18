import React, { useState } from 'react';
import { TextField, Select, MenuItem, InputAdornment } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        fontSize:'rem(18px)',
        fontFamily: 'spartan-bold',
        lineHeight: 'rem(28px)',
        textAlign : 'center',
        letterSpacing: 'rem(-0.22px)'
    },
});

export function OrderModal() {
    const [time, setTime] = useState('AM');
    const [numOfPeople, setNumOfPeople] = useState(4);
    const handleChange = (ev) => {
        setTime(ev.target.value)
    }


    const classes = useStyles();
  

    const addPeople = () => {
        numOfPeople === 12 ? alert('Maximum Capacity') : setNumOfPeople(numOfPeople + 1);
    }

    const removePeople = () => {
        numOfPeople === 1 ? alert('Minimum For Order : 1') : setNumOfPeople(numOfPeople - 1);
    }
    return (
        <form className="order-form flex-col">
            <TextField className="form-field" label="Name" />
            <TextField className="form-field email" label="Email" />
            <div className="pick-date flex">
                <label>Pick a date</label>
                <TextField className="date-field df1" label="MM" />
                <TextField className="date-field df2" label="DD" />
                <TextField className="date-field df3" label="YYYY" />
            </div>
            <div className="pick-time flex">
                <label>Pick a time</label>
                <TextField className="date-field df1" label="09" />
                <TextField className="date-field df2" label="00" />
                <Select className="date-field df33" value={time} onChange={handleChange}>
                    <MenuItem value='AM'>AM</MenuItem>
                    <MenuItem value='PM'>PM</MenuItem>
                </Select>
            </div>
            <TextField
                InputProps={{
                    classes: {
                        input: classes.root,
                      },
                    startAdornment: (
                        <InputAdornment className="minus" onClick={removePeople} position="start">
                            <img src={require('../assets/imgs/icons/icon-minus.svg').default} alt="" />
                        </InputAdornment>
                    ),
                    endAdornment: (
                        <InputAdornment className="plus" onClick={addPeople} position="end">
                            <img src={require('../assets/imgs/icons/icon-plus.svg').default} alt="" />
                        </InputAdornment>
                    ),
                }} className="form-field people" value={numOfPeople + " people"} />
            <button className="submmit-btn" >MAKE RESERVATION</button>
        </form>
    )
}
