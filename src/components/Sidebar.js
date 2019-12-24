import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import admin from '../assets/admin.png';
import upload from '../assets/upload.png';
import { logout } from '../actions/user';

export default () => {
    const dispatch = useDispatch();
    return (
        <div className="siderbarComponent">
            <div>
                <Link to="/dashboard">
                    <img src={admin} className="mt-50" width="100%" />
                </Link>
                <h1>
                    <Link to="/dashboard" className="sidebar-heading center">
                        Dashboard
                    </Link>
                </h1>
                <h1>
                    <Link to="/competitions" className="sidebar-heading center">
                        Competitions
                    </Link>
                </h1>
                <h1>
                    <Link to="" className="sidebar-heading center">
                        Promo Code
                    </Link>
                </h1>




            </div>
            <div className="btn-fixed">
                <div className="input-group ">
                    <div className="custom-file w-100">
                        <label className="custom-file-label w-100 text-center btn btn-upload" htmlFor="inputGroupFile02" aria-describedby="inputGroupFileAddon02">
                            <img src={upload} />
                            <span className="pl-14" onClick={() => dispatch(logout())}>Logout</span>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};
