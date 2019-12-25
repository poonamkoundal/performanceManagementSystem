import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
// import ProcessingLoader from '../../../../components/ProcessingLoader';
import { Container, Row, Col, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import GoalModal from '../../../components/goalModal';
import { getGoal } from '../../../actions/goal';
const detail = {
    title: ''
};

export default () => {
    const dispatch = useDispatch();
    const [modalstate, setModal] = useState(false);
    const [modalDetals, setModalDetails] = useState(detail);
    const toggle = (title) => {
        setModalDetails({ title });
        setModal(!modalstate);
    };

    useEffect(() => {
        dispatch(getGoal());
    }, []);
    return (
        <Container className="themed-container" fluid={true}>
            <Row>
                <Col>
                    <Card>
                        <CardBody>
                            <CardTitle>Yearly Goal</CardTitle>
                            <CardSubtitle>Card subtitle</CardSubtitle>
                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                            <Button onClick={() => toggle('Yearly Goal')}>Edit Goal </Button>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card>
                        <CardBody>
                            <CardTitle>First Half-Yearly Goal</CardTitle>
                            <CardSubtitle>Card subtitle</CardSubtitle>
                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                            <Button onClick={() => toggle('Half-Yearly Goal')}>Edit Goal </Button>
                        </CardBody>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <CardBody>
                            <CardTitle>Second Half-Yearly Goal</CardTitle>
                            <CardSubtitle>Card subtitle</CardSubtitle>
                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                            <Button onClick={() => toggle('Half-Yearly Goal')}>Edit Goal </Button>
                        </CardBody>
                    </Card>
                </Col>
            </Row >
            <Row>
                <Col>
                    <Card>
                        <CardBody>
                            <CardTitle>First Quaterly Goal</CardTitle>
                            <CardSubtitle>Card subtitle</CardSubtitle>
                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                            <Button onClick={() => toggle('First Quaterly Goal')}>Edit Goal </Button>
                        </CardBody>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <CardBody>
                            <CardTitle>Second Quaterly Goal</CardTitle>
                            <CardSubtitle>Card subtitle</CardSubtitle>
                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                            <Button onClick={() => toggle('Second Quaterly Goal')}>Edit Goal </Button>
                        </CardBody>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <CardBody>
                            <CardTitle>Third Quaterly Goal</CardTitle>
                            <CardSubtitle>Card subtitle</CardSubtitle>
                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                            <Button onClick={() => toggle('Third Quaterly Goal')}>Edit Goal </Button>
                        </CardBody>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <CardBody>
                            <CardTitle>Last Quaterly Goal</CardTitle>
                            <CardSubtitle>Card subtitle</CardSubtitle>
                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                            <Button onClick={() => toggle('Last Quaterly Goal')}>Edit Goal </Button>
                        </CardBody>
                    </Card>
                </Col>
            </Row>

            {modalstate && < GoalModal isOpen={modalstate} closeModal={toggle} modalDetails={modalDetals} />}
        </Container >
    );
};

