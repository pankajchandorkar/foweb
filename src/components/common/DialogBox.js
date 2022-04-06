import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from "@mui/styles";

export default function DialogBox(props) {

    //custom css code
    const useStyles = makeStyles({
        root: {
            "& .MuiDialog-paper": {
                borderRadius: "10px",
            },
            "& .MuiDialogTitle-root": {
                background: "#0086FF",
                padding: "7px 15px",
                color: "#fff",
                fontSize: "0.9rem",

                "& .MuiIconButton-root": {
                    padding: "6px",
                    color: "#ffffff",
                    top:"0px",
                }
            }
        }
    });

    const classes = useStyles();

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <span onClick={handleClickOpen}>
                {props.link}
            </span>           
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                classes={classes}
                fullWidth={true}
                maxWidth='xl'
            >
                <DialogTitle sx={{ m: 0, p: 2 }} id="alert-dialog-title">
                    Title
                    <IconButton
                        aria-label="close"
                        onClick={handleClose}
                        sx={{
                            position: 'absolute',
                            right: 8,
                            top: 8,
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                                Content
                    </DialogContentText>
                </DialogContent>
                {/*<DialogActions>
                    <Button onClick={handleClose}>Disagree</Button>
                    <Button onClick={handleClose} autoFocus>
                        Agree
                    </Button>
                    </DialogActions>*/}
            </Dialog>
        </div>
    );
}
