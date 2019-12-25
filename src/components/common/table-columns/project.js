/*
 * @file: customers.js
 * @description: It Contain all customers tables header columns.
 * @author: smartData
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { Role } from '../../../utilities/constants';
import moment from 'moment';
import DeleteRecords from '../delete-records';
//function to get the role name
let i = 0;
const setCounter = (i) => {
    return i.substr(i.length - 4);
};
/************ Customer column list **********/
export default [
    {
        Header: '#',
        accessor: 'uid',
        show: true,
        Cell: ({ original }) => (
            <React.Fragment>
                {setCounter(original._id)}
            </React.Fragment>
        )
    },
    {
        Header: 'Name',
        accessor: 'name',
        show: true,
    },
    {
        Header: 'Start Date',
        accessor: 'startDate',
        show: true,
        Cell: ({ original }) => (
            <React.Fragment>
                {moment(original.startDate).format('MMM D YYYY')}
            </React.Fragment>
        )
    },
    {
        Header: 'Tentative End Date',
        accessor: 'endDate',
        show: true,
        Cell: ({ original }) => (
            <React.Fragment>
                {moment(original.joinDate).format('MMM D YYYY')}
            </React.Fragment>
        )
    },
    {
        Header: 'Actual Close Date',
        accessor: 'closeDate',
        show: true,
        Cell: ({ original }) => (
            <React.Fragment>
                {(original.closeDate) ? moment(original.closeDate).format('MMM D YYYY') : ''}
            </React.Fragment>
        )
    },

    {
        Header: 'Action',
        accessor: '_index',
        show: true,
        Cell: ({ original }) => (
            <React.Fragment>
                <DeleteRecords title="project" deleteId={original._id} />
            </React.Fragment>
        )
    }
];
