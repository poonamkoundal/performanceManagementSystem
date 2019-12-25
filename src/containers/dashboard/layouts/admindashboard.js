import React from 'react';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import ProcessingLoader from '../../../components/ProcessingLoader';
import { Container, Row, Col, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

export default () => {
    return (
        <Container className="themed-container" fluid={true}>
            This is admin dashboard
        </Container >
    );
};

