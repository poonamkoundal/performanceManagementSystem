/*
 * @file: Layouts.js
 * @description: Defined all Layouts for application
 * @date: 28.11.2019
 * @author: 
*/

import React from 'react';
import Sidebar from './sidebar';
/*************** Front Layout ***************/
export const publicLayout = props => {
    window.scrollTo(0, 0);
    return (
        <section className="main-content frontend" id="home">
            <section className="content">{props.children}</section>
        </section>
    );
};

/*************** Dashboard Layout ***************/
export const adminLayout = props => {
    window.scrollTo(0, 0);
    return (
        <React.Fragment>
            {/* <Header /> */}
            <div className="appContent">
                <div className="main-container collapse-sidebar">
                    <div className="container">
                        <Sidebar history={props.children.props.history} location={props.children.props.location} />
                        <div className="row">
                            <div className="col-md-12 admin">
                                {props.children}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <Footer /> */}
        </React.Fragment>
    );
};


/*************** Dashboard Layout ***************/
export const privateLayout = props => {
    window.scrollTo(0, 0);
    return (
        <React.Fragment>
            {/* <Header /> */}
            <div className="appContent">
                <div className="main-container collapse-sidebar">
                    <div className="container">
                        <Sidebar history={props.children.props.history} location={props.children.props.location} />
                        <div className="row">
                            <div className="col-md-12 admin">
                                {props.children}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <Footer /> */}
        </React.Fragment>
    );
};