import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import DateTimePicker from 'react-datetime-picker';
import Loader from '../../../components/ProcessingLoader';
import { Row, Col, Card, Badge, Button, FormGroup, Label } from 'reactstrap';
import { LocalForm, Control, Errors } from 'react-redux-form';
import { required, requiredDate } from '../../../utilities/regex';
import { addProject } from '../../../actions/project';
import { getEmployee } from '../../../actions/employee';
import Select from 'react-select';
import 'react-datepicker/dist/react-datepicker.css';
import { PaymentMode } from '../../../utilities/constants';



class EmployeeAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loader: false,
            teamMembers: [],
        };
    }

    componentDidMount() {
        this.props.getEmployee();
        // this.props.getCreditApplicationCustomers({ isApproved: 0 });
    }

    submitForm = (formData) => {
        let values = { ...formData };

        const teamMembers = this.state.teamMembers.map(obj => ({ _id: obj.value, role: obj.role }));
        values = { ...values, teamMembers };
        this.props.saveProject(values);
    }

    datePicker = (props) => {
        return <DateTimePicker
            disableClock={true}
            format={'MM/dd/yyyy'}
            {...props}
        />;
    };

    /********** End date and time *************/

    getSelectData = (data) => {
        let tmpArr = [];
        data.map((value, key) => {
            tmpArr.push({ value: value._id, label: value.email, role: value.role });
        });
        return tmpArr;
    }

    handleChange = selectedOption => {

        this.setState({ teamMembers: selectedOption });
    };

    render() {
        const { loader } = this.state;
        const { props, history, employee } = this.props;
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
                                model="project"
                            >
                                <FormGroup row>
                                    <Label for="name" sm={3}>Project Name</Label>
                                    <Col sm={6}>
                                        <Control.text
                                            model=".name"
                                            className="form-control"
                                            placeholder="Project Name"
                                            validators={{ required }}
                                        />
                                        <Errors
                                            model="project.name"
                                            show={(field) => field.touched && !field.focus}
                                            className="error"
                                            messages={{
                                                required: 'Kindly enter name.'
                                            }}
                                        />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="description" sm={3}>Project Description</Label>
                                    <Col sm={6}>
                                        <Control.textarea
                                            model=".description"
                                            className="form-control"
                                            placeholder="Project Description"
                                            validators={{ required }}
                                        />
                                        <Errors
                                            model="project.description"
                                            show={(field) => field.touched && !field.focus}
                                            className="error"
                                            messages={{
                                                required: 'Kindly enter description.'
                                            }}
                                        />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="description" sm={3}>Team Members</Label>
                                    <Col sm={6}>
                                        <Select options={this.getSelectData(employee.records)}
                                            isMulti={true}
                                            {...props}
                                            onChange={this.handleChange}
                                        />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="startDate" sm={3}>Start Date</Label>
                                    <Col sm={6}>
                                        <Control.text
                                            model=".startDate"
                                            className="form-control"
                                            placeholder="Project start date"
                                            component={(val) => this.datePicker(val, 'startDate')}
                                        />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="endDate" sm={3}>Tentative End Date</Label>
                                    <Col sm={6}>
                                        <Control.text
                                            model=".endDate"
                                            className="form-control"
                                            placeholder="Project tentative end date"
                                            component={(val) => this.datePicker(val, 'endDate')}
                                        />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="closeDate" sm={3}>Project Closeout Date</Label>
                                    <Col sm={6}>
                                        <Control.text
                                            model=".closeDate"
                                            className="form-control"
                                            placeholder="Project tentative end date"
                                            component={(val) => this.datePicker(val, 'closeDate')}
                                        />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="totalHours" sm={3}>Total Hours</Label>
                                    <Col sm={6}>
                                        <Control.text
                                            model=".totalHours"
                                            className="form-control"
                                            placeholder="Total # of project hours"
                                            validators={{ required }}
                                        />
                                        <Errors
                                            model="project.totalHours"
                                            show={(field) => field.touched && !field.focus}
                                            className="error"
                                            messages={{
                                                required: 'Kindly enter total hours.'
                                            }}
                                        />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="role" sm={3}>Payment Mode</Label>
                                    <Col sm={6}>
                                        <Control.select
                                            model=".paymentMode"
                                            className="form-control"
                                            placeholder="Payment Mode"
                                            validators={{ required }}
                                        >
                                            <option value=''>Select Payment Mode</option>
                                            {
                                                Object.keys(PaymentMode).map((r) => {
                                                    return <option key={r} value={PaymentMode[r]}>
                                                        {r}
                                                    </option>;
                                                })
                                            }
                                        </Control.select>
                                        <Errors
                                            model="user.paymentMode"
                                            show={(field) => field.touched && !field.focus}
                                            className="error"
                                            messages={{
                                                required: 'Kindly select payment mode.'
                                            }}
                                        />
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
    employee: state.employee
});

const mapDispatchToProps = dispatch => ({
    saveProject: bindActionCreators(addProject, dispatch),
    getEmployee: bindActionCreators(getEmployee, dispatch),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EmployeeAdd);