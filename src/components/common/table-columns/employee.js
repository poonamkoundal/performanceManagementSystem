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
const getKey = (val) => {
  return Object.keys(Role).find(key => Role[key] === val);
};
/************ Customer column list **********/
export default [
  {
    Header: 'ID',
    accessor: 'uid',
    show: true,
  },
  {
    Header: 'First Name',
    accessor: 'firstName',
    show: true,
  },
  {
    Header: 'Last Name',
    accessor: 'lastName',
    show: true,
  },
  {
    Header: 'Email',
    accessor: 'email',
    show: true
  },
  {
    Header: 'Role',
    accessor: 'role',
    show: true,
    Cell: ({ original }) => (
      <React.Fragment>
        {getKey(original.role)}
      </React.Fragment>
    )
  },

  {
    Header: 'Department',
    accessor: 'department',
    show: true
  },
  {
    Header: 'Jonining Date',
    accessor: 'joinDate',
    show: true,
    Cell: ({ original }) => (
      <React.Fragment>
        {moment(original.joinDate).format('MMM D YYYY')}
      </React.Fragment>
    )
  },
  {
    Header: 'Last Appraisal Date',
    accessor: 'appraisalDate',
    show: true,
    Cell: ({ original }) => (
      <React.Fragment>
        {moment(original.appraisalDate).format('MMM D YYYY')}
      </React.Fragment>
    )
  },

  {
    Header: 'Action',
    accessor: '_index',
    show: true,
    Cell: ({ original }) => (
      <React.Fragment>
        <DeleteRecords title="employee" deleteId={original._id} />
      </React.Fragment>
    )
  }
];
