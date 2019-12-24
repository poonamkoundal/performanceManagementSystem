import React, { useState } from 'react';
import { LocalForm, Control, Errors } from 'react-redux-form';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col, Card, Badge, Button, FormGroup, Label } from 'reactstrap';
import DateTimePicker from 'react-datetime-picker';
import { add } from '../../actions/competition';
import Loader from '../../components/ProcessingLoader';
import { required, requiredDate } from '../../utilities/regex';
//https://www.npmjs.com/package/react-datetime-picker
export default ({ history }) => {
    const { loader } = useSelector(state => state);
    const dispatch = useDispatch();
    // const [date, setDate] = useState(new Date);
    // const onChange = (event) => {
    //     console.log("event", event);
    // };
    /********** Start date and time *************/
    const startDateTime = (props) => {
        return <DateTimePicker
            // onChange={onChange}
            // value={date}
            {...props}
        />;
    };
    /********** End date and time *************/
    const endDateTime = (props) => {
        return <DateTimePicker
            //onChange={onChange}
            // value={date}
            {...props}
        />;
    };
    return (
        <Container>
            <Loader isShowingLoader={loader.isLoading} />
            <Row>
                <Col sm="12" md={{ size: 10, offset: 1 }}>
                    <h3 onClick={() => history.goBack()}><Badge color="secondary">Back</Badge></h3>
                    <Card body outline color="secondary">
                        <h3 className="center" ><Badge color="secondary">Add Competition</Badge></h3>
                        <LocalForm
                            onSubmit={(values) => dispatch(add(values))}
                            model="competition"
                        >
                            <FormGroup row>
                                <Label for="name" sm={3}>Name</Label>
                                <Col sm={8}>
                                    <Control.text
                                        model=".name"
                                        className="form-control"
                                        placeholder="Name"
                                        validators={{ required }}
                                    />
                                    <Errors
                                        model="competition.name"
                                        show={(field) => field.touched && !field.focus}
                                        className="error"
                                        messages={{
                                            required: 'Please provide an email address.'
                                        }}
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="description" sm={3}>Description</Label>
                                <Col sm={8}>
                                    <Control.text
                                        model=".description"
                                        className="form-control"
                                        placeholder="Description"
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="startDate" sm={3}>Start Date/Time</Label>
                                <Col sm={8}>
                                    <Control.text
                                        model=".startDate"
                                        className="form-control"
                                        placeholder="Start Date"
                                        component={startDateTime}
                                        validators={{ requiredDate }}
                                    />
                                    <Errors
                                        model="competition.startDate"
                                        show={(field) => field.touched && !field.focus}
                                        className="error"
                                        messages={{
                                            requiredDate: 'Please select start date.'
                                        }}
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="endDate" sm={3}>End Date/Time</Label>
                                <Col sm={8}>
                                    <Control.text
                                        model=".endDate"
                                        className="form-control"
                                        placeholder="End date time"
                                        component={endDateTime}
                                        validators={{ requiredDate }}
                                    />
                                    <Errors
                                        model="competition.endDate"
                                        show={(field) => field.touched && !field.focus}
                                        className="error"
                                        messages={{
                                            requiredDate: 'Please select end date.'
                                        }}
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="users" sm={3}>No. of users</Label>
                                <Col sm={8}>
                                    <Control.text
                                        type="number"
                                        model=".users"
                                        className="form-control"
                                        placeholder="No. of users"
                                        validators={{ required }}
                                    />
                                    <Errors
                                        model="competition.users"
                                        show={(field) => field.touched && !field.focus}
                                        className="error"
                                        messages={{
                                            required: 'Please enter users limit.'
                                        }}
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="price" sm={3}>Price</Label>
                                <Col sm={8}>
                                    <Control.text
                                        type="number"
                                        model=".price"
                                        className="form-control"
                                        placeholder="Price"
                                        validators={{ required }}
                                    />
                                    <Errors
                                        model="competition.price"
                                        show={(field) => field.touched && !field.focus}
                                        className="error"
                                        messages={{
                                            required: 'Please enter price.'
                                        }}
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col sm={12} md={{ size: 6, offset: 3 }}>
                                    <Button disabled={loader.isLoading} color="primary" className="pull-left">{loader.isLoading ? "Adding ..." : "Add"}</Button>
                                </Col>
                            </FormGroup>
                        </LocalForm>
                    </Card>
                </Col>
            </Row>
        </Container>

    );
};
