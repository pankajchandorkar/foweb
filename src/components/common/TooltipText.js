import React, { useState } from 'react'
import Tooltip from '@material-ui/core/Tooltip';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import { makeStyles } from "@mui/styles";

const TooltipText = (props) => {

    //custom css code
    const useStyles = makeStyles({

        arrow: {
            color: "#fff",
            width: "22px",
            height: "15px",
            top: "-8px!important",
        },
        tooltipArrow: {

        },
        tooltip: {
            background: "#ffffff",
            color: "#434343",
            borderRadius: "10px",
            boxShadow: "2px 2px 5px #ccc, -2px -2px 5px #ccc",
        },
    });

    const classes = useStyles();

    const [open, setOpen] = useState(false);

    const handleTooltipClose = () => {
        setOpen(false);
    };

    const handleTooltipOpen = () => {
        setOpen(true);
    };

    return (
        <React.Fragment>
            <ClickAwayListener onClickAway={handleTooltipClose}>
                <Tooltip
                    PopperProps={{
                        disablePortal: true,
                    }}
                    onClose={handleTooltipClose}
                    open={open}
                    disableFocusListener
                    disableHoverListener
                    disableTouchListener
                    title={props.title}
                    arrow
                    placement='top'
                    classes={classes}
                >
                    <span onClick={handleTooltipOpen}>{props.link}</span>
                </Tooltip>
            </ClickAwayListener>
            {
                open == true &&
                <div style={{
                    position: "fixed",
                    left: " 0", 
                    top: "0", 
                    width: "100%",
                    zIndex: "1", 
                    opacity: "0.5", 
                    background: "#434343",
                    height: "100%"
                }}></div>
            }
        </React.Fragment>
    )
}

export default TooltipText