import React from 'react';
import { LocalForm, Control, Errors } from 'react-redux-form';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../actions/user';
import { required, validateEmail, validatePassword } from '../utilities/regex';
import { Container, Row, Col, Card, Badge, Button, FormGroup, Label } from 'reactstrap';
//https://reactstrap.github.io/components/card/
export default () => {
    const { loader } = useSelector(state => state);
    const dispatch = useDispatch();
    return (
        <Container>
            <Row>
                <Col sm="12" md={{ size: 6, offset: 3 }}>
                    <Card body outline color="secondary">
                        <h1 className="badge-center" ><Badge color="secondary">Welcome!</Badge></h1>
                        <LocalForm
                            onSubmit={(values) => dispatch(login(values))}
                            model="user"
                        >
                            <FormGroup row>
                                <Label for="exampleEmail2" sm={3}>Email</Label>
                                <Col sm={8}>
                                    <Control.text
                                        type="email"
                                        model=".email"
                                        className="form-control"
                                        placeholder="Email"
                                        validators={{ required, validateEmail }}
                                    />
                                    <Errors
                                        model="user.email"
                                        show={(field) => field.touched && !field.focus}
                                        className="error"
                                        messages={{
                                            required: 'Please provide an email address.',
                                            validateEmail: (val) => `${val} is not a valid email.`,
                                        }}
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="exampleEmail2" sm={3}>Password</Label>
                                <Col sm={8}>
                                    <Control.text
                                        type="password"
                                        model=".password"
                                        className="form-control"
                                        placeholder="Password"
                                        validators={{ required, validatePassword }}
                                    />
                                    <Errors
                                        model="user.password"
                                        show={(field) => field.touched && !field.focus}
                                        className="error"
                                        messages={{
                                            required: 'Please provide a password.',
                                            validatePassword: 'Password should be between 6 to 12 charactor.',
                                        }}
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col sm={12} md={{ size: 6, offset: 3 }}>
                                    <Button disabled={loader.isLoading} color="primary" className="pull-left">{loader.isLoading ? "Login ..." : "Login"}</Button>
                                </Col>
                            </FormGroup>
                        </LocalForm>
                    </Card>
                </Col>
            </Row>
        </Container>

    );
};
