import React from 'react'
import '../../styles/Modal.scss';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@material-ui/icons/Close';

function Modal(props) {
  const closeModal = (e) => {
    e.stopPropagation()
    props.updateModal(false)
  }
  return (
    <div className="model--wrapper" onClick={(e) => closeModal(e)}>
      <div
        className="model--container"
        onClick={(e) => {
          e.stopPropagation()
        }}
      >
        <div className="model--header">
          <h2>{props.headTxt}</h2>
          <div style={{ cursor: 'pointer' }} onClick={(e) => closeModal(e)}>
            {' '}
            <IconButton sx={{ color: "#ffffff" }}>
              <CloseIcon />
            </IconButton>
          </div>
        </div>
        <div className="model--body">
          {props.children}
        </div>
      </div>
    </div>
  )
}

export default Modal
