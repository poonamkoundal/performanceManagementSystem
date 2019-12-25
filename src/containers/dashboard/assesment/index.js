import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getProject } from '../../../actions/project';
import { addAssesment } from '../../../actions/assesment';
import { Row, Col, Card, Badge, Button, FormGroup, Label } from 'reactstrap';
import { LocalForm, Control, Errors } from 'react-redux-form';

class SelfAssesment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loader: false,
        };
    }

    componentDidMount() {
        this.props.getProject();
    }

    submitForm(data) {
        let tmpData = {},
            tmpArr = [];
        for (var val in data._id) {
            if (data._id.hasOwnProperty(val)) {
                const tmpObj = {
                    '_id': data._id[val],
                    'rating': data.rating[val],
                    'comments': data.comments[val]
                };
                tmpArr.push(tmpObj);
            }
        };

        tmpData.projects = tmpArr;
        tmpData.finalRating = data.finalRating;
        tmpData.performanceGoal = data.performanceGoal;
        this.props.addAssesment(tmpData);
    }

    submitFeedbackForm(data) {
        console.log(data);
    }

    getProjects = (project) => {
        return project.records.map((obj, val) =>
            <Row key={val}>
                <Col>{obj.name}</Col>
                <Col sm-3>
                    <Control.text
                        model={`.rating[${val}]`}
                        className="form-control"
                        placeholder="Rating"
                    /></Col>
                <Col>
                    <Control.textarea
                        model={`.comments[${val}]`}
                        className="form-control"
                        placeholder="Comment"
                    /></Col>
                <Col>
                    <Control.text
                        model={`._id[${val}]`}
                        className="form-control"
                        defaultValue={obj._id}
                        type='hidden'
                    />
                </Col>
            </Row>
        );
    }
    render() {
        const { project, user } = this.props;
        const { loader } = this.state;
        return <div>
            <Row>
                <Col sm="12" md={{ size: 12 }}>
                    {user.assesmentUser._id === user._id && <LocalForm
                        onSubmit={(values) => this.submitForm(values)}
                        model="assesment"
                    >
                        {this.getProjects(project)}
                        <FormGroup row>
                            <Label for="description" sm={3}>Final  Rating</Label>
                            <Col sm={6}>
                                <Control.text
                                    model=".finalRating"
                                    className="form-control"
                                    placeholder="Final Rating"

                                />
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label for="description" sm={3}>Performance Goals</Label>
                            <Col sm={6}>
                                <Control.textarea
                                    model=".performanceGoal"
                                    className="form-control"
                                    placeholder="Performance Goals"

                                />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col sm={12} md={{ size: 6, offset: 3 }}>
                                <Button type='submit' disabled={loader.isLoading} color="primary" className="pull-left">{loader.isLoading ? 'Adding ...' : 'Add'}</Button>
                            </Col>
                        </FormGroup>
                    </LocalForm>}

                    {/* Conditional Form */}
                    <LocalForm
                        onSubmit={(values) => this.submitFeedbackForm(values)}
                        model="assesment"
                    >

                        <FormGroup row>
                            <Col sm={6}>
                                <Control.text
                                    model="._id"
                                    className="form-control"
                                    type='hidden'
                                    defaultValue={user._id}
                                />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="description" sm={3}>Performance Rating</Label>
                            <Col sm={6}>
                                <Control.text
                                    model=".rating"
                                    className="form-control"
                                    placeholder="Performance Rating"
                                />
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label for="description" sm={3}>Performance Comments</Label>
                            <Col sm={6}>
                                <Control.textarea
                                    model=".comments"
                                    className="form-control"
                                    placeholder="Performance Goals"
                                />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col sm={12} md={{ size: 6, offset: 3 }}>
                                <Button type='submit' disabled={loader.isLoading} color="primary" className="pull-left">{loader.isLoading ? 'Adding ...' : 'Add'}</Button>
                            </Col>
                        </FormGroup>
                    </LocalForm>

                </Col>
            </Row>
        </div >;
    }
}

const mapStateToProps = state => ({
    project: state.project,
    user: state.user
});

const mapDispatchToProps = dispatch => ({
    getProject: bindActionCreators(getProject, dispatch),
    addAssesment: bindActionCreators(addAssesment, dispatch),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SelfAssesment);