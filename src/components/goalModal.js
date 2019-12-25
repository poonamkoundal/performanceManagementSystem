import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, Form, FormGroup } from 'reactstrap';
import TextareaAutosize from 'react-textarea-autosize';

const GoalModal = ({ isOpen, closeModal, modalDetails }) => {

    const toggleModal = () => {
        closeModal('');
    };
    return (
        <div>
            <Modal isOpen={isOpen} toggle={toggleModal} className={''} backdrop={true}>
                <ModalHeader toggle={toggleModal}>{modalDetails.title}</ModalHeader>
                <ModalBody>
                    <TextareaAutosize
                        minRows={5}
                        maxRows={15}
                        defaultValue="Add Your Goal Here"
                        className='textareagoal'
                    />
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggleModal}>Save Goal</Button>{' '}
                    <Button color="secondary" onClick={toggleModal}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
};

export default GoalModal;