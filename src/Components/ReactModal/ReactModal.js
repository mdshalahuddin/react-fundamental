
import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const ReactModal = (props) => {
    const {title,category,description,image,price,rating} = props.product;
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return (
        <>
      <Button variant="primary" onClick={handleShow}>
      Details
      </Button>

      <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton >
                    <img src={image} alt="" className='w-50'/>
                    <Modal.Title>{title}</Modal.Title>
                    
                </Modal.Header>
                <p>Price: ${ price}</p>
        <Modal.Body>{description}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    );
};

export default ReactModal;