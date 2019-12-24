import React from 'react';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import ProcessingLoader from '../components/ProcessingLoader';

export default () => {
    return (
        <div>Coming soon....
            <ProcessingLoader isShowingLoader={false} />
        </div>
    );
};

