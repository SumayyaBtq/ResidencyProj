import React from 'react';
import { Button, Modal} from 'react-bootstrap';

export type PropsModal={
    show:boolean,
    handleClose: ()=>void,
    modalTitle:string,
    modalBody:string

}

const ModalInfo= (props:PropsModal) =>{

    return (
        <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.modalTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.modalBody}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
    )
}

export default ModalInfo
