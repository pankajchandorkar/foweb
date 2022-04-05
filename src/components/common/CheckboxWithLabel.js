import React from 'react'
import { Checkbox } from '@material-ui/core';
import { FormControlLabel } from '@mui/material';

function CheckboxWithLabel(props) {
    return (
        <FormControlLabel className={props.className} control={<Checkbox color='primary' size='small' />} label={props.label} />
    )
}

export default CheckboxWithLabel
