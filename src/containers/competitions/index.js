import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col, Button, Table } from 'reactstrap';
import { get } from '../../actions/competition';

export default () => {
    const { competition } = useSelector(state => state);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(get());
    }, []);
    return (
        <Container>
            <Row>
                <Col sm="12" md={{ size: 2, offset: 10 }}>
                    <Link to="competitions/add">
                        <Button color="info">Add Competition</Button>
                    </Link>
                </Col>
            </Row>
            <Row>
                <Col sm="12" className="competition-table">
                    <Table>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Competition Name</th>
                                <th>Description</th>
                                <th>Users</th>
                                <th>Price</th>
                                <th>Start Date</th>
                                <th>End Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                competition.map((row, index) =>
                                    <tr key={index}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{row.name}</td>
                                        <td>{row.description}</td>
                                        <td>{row.users}</td>
                                        <td>{row.price}</td>
                                        <td>{row.startDate}</td>
                                        <td>{row.endDate}</td>
                                    </tr>
                                )
                            }

                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    );
};