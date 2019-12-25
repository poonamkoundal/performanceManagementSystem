import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, Form, FormGroup } from 'reactstrap';
import TextareaAutosize from 'react-textarea-autosize';
import { addGoal } from '../actions/goal';
import Select from 'react-select';
import { Container, Row, Col } from 'reactstrap';
const options = [
    { value: 1, label: 'Yearly Goal' },
    { value: 2, label: 'Half Yearly Goal' },
    { value: 3, label: 'Quarterly Goal' }
];

const GoalModal = ({ isOpen, closeModal, modalDetails }) => {
    const dispatch = useDispatch();
    const toggleModal = () => {
        closeModal('');
    };
    const [goalValue, setValue] = useState(modalDetails.goal);
    const [goalType, setGoalType] = useState(modalDetails.type);
    // save goal to database
    const saveGoal = () => {

        let tmpValue = {
            'goalId': (modalDetails.goalId) ? modalDetails.goalId : undefined,
            'year': new Date().getFullYear(),
            'goal': goalValue,
            'type': goalType
        };

        dispatch(addGoal(tmpValue));
        toggleModal();
    };

    //set goal data to
    const setGoal = (e) => {
        setValue(e);
    };

    // handleonchange
    const handleonchange = (e) => {
        setGoalType(e.value);
    };

    return (
        <div>
            <Modal isOpen={isOpen} toggle={toggleModal} className={''} backdrop={true}>
                <ModalHeader>
                    {modalDetails.title ? modalDetails.title : 'Add Goal'}
                </ModalHeader>
                <ModalBody>
                    <Container className="themed-container" fluid={true}>
                        <Row>
                            <Col>
                                {!modalDetails.title &&
                                    <Select options={options}
                                        onChange={(e) => handleonchange(e)}
                                    />
                                }
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <TextareaAutosize
                                    minRows={5}
                                    maxRows={15}
                                    defaultValue={goalValue}
                                    className='textareagoal'
                                    onBlur={e => setGoal(e.target.value)}
                                />
                            </Col>
                        </Row>
                    </Container>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={saveGoal}>Save Goal</Button>{' '}
                    <Button color="secondary" onClick={toggleModal}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
};

export default GoalModal;