/*
 * @file: customers.js
 * @description: It Contain all customers tables header columns.
 * @author: smartData
 */

import React from 'react';
import ReactStars from 'react-stars';
import { getFile } from '../../../utilities/common';
import { Link } from 'react-router-dom';

/************ Customer column list **********/
export default [
  /*{
    Header: '#',
    accessor: '_id',
    sortable: false,
    show: true,
    Cell: ({ original }) => (
      <Link className="text-black" to={`/customers/profile/${original._id}`}>
        <img
          src={getFile(original.profileImage || '')}
          className="table-profile-img"
          alt="customer-image"
        />
      </Link>
    )
  },*/
  {
    Header: 'ID',
    accessor: 'uid',
    show: true,
    Cell: ({ original }) => (
      <Link className="text-black" to={`/customers/profile/${original._id}`}>
      <img
          src={getFile(original.profileImage || '')}
          className="table-profile-img"
          alt="customer-image"
        />
        {original.uid}
      </Link>
    )
  },
  {
    Header: 'First Name',
    accessor: 'firstName',
    show: true,
    Cell: ({ original }) => (
      <Link className="text-black" to={`/customers/profile/${original._id}`}>
        {original.firstName}
      </Link>
    )
  },
  {
    Header: 'Last Name',
    accessor: 'lastName',
    show: true,
    Cell: ({ original }) => (
      <Link className="text-black" to={`/customers/profile/${original._id}`}>
        {' '}
        {original.lastName}
      </Link>
    )
  },
  {
    Header: 'Rating',
    accessor: 'email',
    show: true,
    Cell: props => <ReactStars count={5} size={18} value={3.5} color2={'#D2F035'} />
  },
  {
    Header: 'Company Name',
    accessor: 'businessName',
    show: true
  },
  {
    Header: 'Email',
    accessor: 'email',
    show: true
  },
  {
    Header: 'Action',
    accessor: '_index',
    show: true,
    Cell: ({ original }) => (
      <React.Fragment>
        <Link to={`/jobs/add-job/${original._id}`}>
          <button className="btn customer-book-btn" type="button">
            Book Job
            <i className="fas fa-plus pl-3"></i>
          </button>
        </Link>
      </React.Fragment>
    )
  }
];
