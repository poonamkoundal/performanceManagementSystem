import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import DateTimePicker from 'react-datetime-picker';
import Loader from '../../../components/ProcessingLoader';
import { Row, Col, Card, Badge, Button, FormGroup, Label } from 'reactstrap';
import { LocalForm, Control, Errors } from 'react-redux-form';
import { required, requiredDate } from '../../../utilities/regex';
import { Role, Department } from '../../../utilities/constants';
import "react-datepicker/dist/react-datepicker.css";

import { addEmployee } from '../../../actions/employee';

class EmployeeAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loader: false,
            joinDate: null,
            appraisalDate: null
        };
    }

    componentDidMount() {
        // this.props.getCustomer({});
        // this.props.getCreditApplicationCustomers({ isApproved: 0 });
    }

    submitForm = (formData) => {
        this.props.saveEmployee(formData);
    }

    datePicker = (props) => {
        return <DateTimePicker
            disableClock={true}
            format={'MM/dd/yyyy'}
            {...props}
        />;
    };
    /********** End date and time *************/



    render() {
        const { loader } = this.state;
        const { history } = this.props;
        return (
            <React.Fragment>
                {/* <Loader isShowingLoader={loader.isLoading} /> */}
                <Row>
                    <Col sm="12" md={{ size: 12 }}>
                        <h3 onClick={() => history.goBack()}><Badge color="secondary">Back</Badge></h3>
                        <h3 className="center" ><Badge color="secondary">Add Employee </Badge></h3>
                    </Col>
                    <Col sm="12" md={{ size: 12 }}>
                        <Card body >
                            <LocalForm
                                onSubmit={(values) => this.submitForm(values)}
                                model="user"
                            >
                                <FormGroup row>
                                    <Label for="firstname" sm={3}>First Name</Label>
                                    <Col sm={6}>
                                        <Control.text
                                            model=".firstName"
                                            className="form-control"
                                            placeholder="First Name"
                                            validators={{ required }}
                                        />
                                        <Errors
                                            model="user.firstName"
                                            show={(field) => field.touched && !field.focus}
                                            className="error"
                                            messages={{
                                                required: 'Kindly enter first name.'
                                            }}
                                        />
                                    </Col>
                                </FormGroup>

                                <FormGroup row>
                                    <Label for="lastName" sm={3}>Last Name</Label>
                                    <Col sm={6}>
                                        <Control.text
                                            model=".lastName"
                                            className="form-control"
                                            placeholder="Last Name"
                                            validators={{ required }}
                                        />
                                        <Errors
                                            model="user.lastName"
                                            show={(field) => field.touched && !field.focus}
                                            className="error"
                                            messages={{
                                                required: 'Kindly enter last name.'
                                            }}
                                        />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="email" sm={3}>Email</Label>
                                    <Col sm={6}>
                                        <Control.text
                                            model=".email"
                                            className="form-control"
                                            placeholder="Email"
                                            validators={{ required }}
                                        />
                                        <Errors
                                            model="user.email"
                                            show={(field) => field.touched && !field.focus}
                                            className="error"
                                            messages={{
                                                required: 'Kindly enter email.'
                                            }}
                                        />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="password" sm={3}>Password</Label>
                                    <Col sm={6}>
                                        <Control.text
                                            model=".password"
                                            className="form-control"
                                            placeholder="Password"
                                            validators={{ required }}
                                            type="password"
                                        />
                                        <Errors
                                            model="user.password"
                                            show={(field) => field.touched && !field.focus}
                                            className="error"
                                            messages={{
                                                required: 'Kindly enter password.'
                                            }}
                                        />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="role" sm={3}>Department</Label>
                                    <Col sm={6}>
                                        <Control.select
                                            model=".department"
                                            className="form-control"
                                            placeholder="Role"
                                            validators={{ required }}
                                        >
                                            <option value=''>Select Department</option>
                                            {
                                                Object.keys(Department).map((r) => {
                                                    return <option key={r} value={Department[r]}>
                                                        {r}
                                                    </option>;
                                                })
                                            }
                                        </Control.select>
                                        <Errors
                                            model="user.department"
                                            show={(field) => field.touched && !field.focus}
                                            className="error"
                                            messages={{
                                                required: 'Kindly select role.'
                                            }}
                                        />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="role" sm={3}>Role</Label>
                                    <Col sm={6}>
                                        <Control.select
                                            model=".role"
                                            className="form-control"
                                            placeholder="Role"
                                            validators={{ required }}
                                        >
                                            <option value=''>Select Role</option>
                                            {
                                                Object.keys(Role).map((r) => {
                                                    return <option key={r} value={Role[r]}>
                                                        {r}
                                                    </option>;
                                                })
                                            }
                                        </Control.select>
                                        <Errors
                                            model="user.role"
                                            show={(field) => field.touched && !field.focus}
                                            className="error"
                                            messages={{
                                                required: 'Kindly select role.'
                                            }}
                                        />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="startDate" sm={3}>Joining Date</Label>
                                    <Col sm={6}>
                                        <Control.text
                                            model=".joinDate"
                                            className="form-control"
                                            placeholder="Joining Date"
                                            component={(val) => this.datePicker(val, 'joinDate')}
                                        />
                                        {/* <Errors
                                            model="user.joingDate"
                                            show={(field) => field.touched && !field.focus}
                                            className="error"
                                            messages={{
                                                requiredDate: 'Please select employee joining date.'
                                            }}
                                        /> */}
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="startDate" sm={3}>Last Appraisal Date</Label>
                                    <Col sm={6}>
                                        <Control.text
                                            model=".appraisalDate"
                                            className="form-control"
                                            placeholder="Last appraisal Date"
                                            component={val => this.datePicker(val, 'appraisalDate')}
                                        />
                                        {/* <Errors
                                            model="user.joingDate"
                                            show={(field) => field.touched && !field.focus}
                                            className="error"
                                            messages={{
                                                requiredDate: 'Please select employee last joining date.'
                                            }}
                                        /> */}
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Col sm={12} md={{ size: 6, offset: 3 }}>
                                        <Button type='submit' disabled={loader.isLoading} color="primary" className="pull-left">{loader.isLoading ? 'Adding ...' : 'Add'}</Button>
                                    </Col>
                                </FormGroup>
                            </LocalForm>
                        </Card>
                    </Col>
                </Row>
            </React.Fragment>
        );
    }
}


const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
    saveEmployee: bindActionCreators(addEmployee, dispatch),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EmployeeAdd);