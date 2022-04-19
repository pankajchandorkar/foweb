import React from 'react'
import { TextField, Autocomplete } from '@mui/material';
import { makeStyles } from "@material-ui/styles";
import "../../styles/AutoCompleteInput.scss";

const AutoCompleteInput = (props) => {

    const useStyles = makeStyles({
        root: {
            "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "#0086ff"
            },
            " & .MuiInputLabel-root.Mui-focused": {
                color: "#0086ff"
            },
            "& .MuiAutocomplete-option": {
                border: "solid 1px red"
            },
        }
    });

    const classes = useStyles();

    return (
        <Autocomplete
            disablePortal
            openOnFocus={true}
            autoHighlight={true}
            fullWidth={true}
            id={props.id}
            options={props.options}
            //sx={{ width: 300 }}
            className={classes.root}
            renderInput={(params) => <TextField {...params}
                label={props.labelText}
                size={'small'}
            />
            }
        />

    )
}

export default AutoCompleteInput