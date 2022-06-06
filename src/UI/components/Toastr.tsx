import React from 'react'
import Toast from 'react-bootstrap/Toast';

export type PropsToastr={
    show:boolean,
    handleClose: ()=>void,
    message:string,
    header:string,
    autoHide:boolean
}
function Toastr ({handleClose,header,message,show,autoHide}:PropsToastr) {
    return (
        <Toast onClose={handleClose} show={show} delay={3000} autohide={autoHide}>
        <Toast.Header>
          {/* <img
            src="holder.js/20x20?text=%20"
            className="rounded mr-2"
            alt=""
          /> */}
          <strong className="mr-auto">{header}</strong>
          <small></small>
        </Toast.Header>
        <Toast.Body>{message}</Toast.Body>
        </Toast>
    )
}

export default Toastr



