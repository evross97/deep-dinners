import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const QuestionModal = (props) => {
  const {
    showButton,
    buttonLabel = "Get talking!",
    className,
    selectedItem,
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  console.log('selectedItem', selectedItem)

  return (
    <div style={{ 'textAlign': 'center', 'margin-top': '20px' }}>
      {showButton &&
        <>
          <Button color="primary" onClick={toggle}>{buttonLabel}</Button>
          <Modal isOpen={modal} toggle={toggle} className={className}>
            <ModalHeader toggle={toggle}>{selectedItem.icon}</ModalHeader>
            <ModalBody>
              {selectedItem.question}
            </ModalBody>
            <ModalFooter>
              <Button color="secondary" onClick={toggle}>Spin again</Button>{' '}
              <Button color="primary" onClick={toggle}>Find out more</Button>
            </ModalFooter>
          </Modal>
        </>
      }
    </div>
  );
}

export default QuestionModal;