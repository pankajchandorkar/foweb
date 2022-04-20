import React, { useState } from 'react'
import Tooltip from '@material-ui/core/Tooltip';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

const TooltipText = (props) => {

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
                    arrow={true}
                    placement="top"
                >
                    <span onClick={handleTooltipOpen}>{props.link}</span>
                </Tooltip>
            </ClickAwayListener>
            {
                open === true && <div className="tooltip-wrapper"></div>
            }
        </React.Fragment>
    )
}

export default TooltipText