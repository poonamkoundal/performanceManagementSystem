import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";


import { Container, Row, Col, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import GoalModal from '../../../components/goalModal';
import { getGoal } from '../../../actions/goal';
const detail = {
    title: '',
    type: null,
    goalId: undefined,
    goal: undefined
};

export default () => {
    const dispatch = useDispatch();
    const { goal } = useSelector(state => state);
    const [modalstate, setModal] = useState(false);
    const [modalDetals, setModalDetails] = useState(detail);
    const toggle = (title, type, goal, goalId) => {
        setModalDetails({ title, type, goal, goalId });
        setModal(!modalstate);
    };

    useEffect(() => {
        dispatch(getGoal());
    }, []);
    const yearlyGoal = goal.find(g => g.type === 1);
    const halfYearlyGoals = goal.filter(g => g.type === 2);
    const quartelyGoal = goal.filter(g => g.year === 3);
    return (
        <Container className="themed-container" fluid={true}>
            <Row>
                <Col>
                    <Button onClick={() => toggle('')}>Add Goal </Button>
                </Col>
            </Row>
            {yearlyGoal &&
                <Row>
                    <Col>
                        <Card>
                            <CardBody>
                                <CardTitle>Yearly Goal</CardTitle>

                                <CardText>{yearlyGoal.goal}</CardText>
                                <Button onClick={() => toggle('Yearly Goal', 1, yearlyGoal['goal'], yearlyGoal['_id'])}>Edit Goal </Button>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            }

            {goal.length > 0 && <React.Fragment>
                <Row>
                    {halfYearlyGoals.map((row, index) =>
                        <Col key={index}>
                            <Card>
                                <CardBody>
                                    <CardTitle>{index ? 'Second Half-Yearly Goal' : 'First Half-Yearly Goal'}</CardTitle>

                                    <CardText>{row.goal || ''}</CardText>
                                    <Button onClick={() => toggle('Half-Yearly Goal', 2, row['goal'], row['_id'])}>Edit Goal</Button>
                                </CardBody>
                            </Card>
                        </Col>
                    )}

                </Row >
                <Row>
                    {quartelyGoal.map((row, index) =>
                        <Col key={index}>
                            <Card>
                                <CardBody>
                                    <CardTitle>Quaterly Goal</CardTitle>

                                    <CardText>{row.goal}</CardText>
                                    <Button onClick={() => toggle('First Quaterly Goal', 3, row['goal'], row['_id'])}>Edit Goal </Button>
                                </CardBody>
                            </Card>
                        </Col>
                    )}

                </Row>
            </React.Fragment>}
            {modalstate && < GoalModal isOpen={modalstate} closeModal={toggle} modalDetails={modalDetals} />}
        </Container >
    );
};


