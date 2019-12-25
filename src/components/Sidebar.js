import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import admin from '../assets/admin.png';
import upload from '../assets/upload.png';
import { logout } from '../actions/user';

import SideNav, { ClickOutside, Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

export default (history) => {
    const dispatch = useDispatch();

    const [expanded, setMenu] = useState(false);
    return (
        <React.Fragment>
            {/* <ClickOutside
                onClickOutside={() => {
                    setMenu(false);
                }}
            > */}
                <SideNav
                    expanded={expanded}
                    onToggle={(expanded) => {
                        setMenu(expanded);
                    }}
                    onSelect={(selected) => {
                        const to = '/' + selected;
                        if(selected === 'logout'){
                            dispatch(logout());
                        } else if (history.location.pathname !== to) {
                            history.history.push(to);
                        }
                    }}
                >
                    <SideNav.Toggle />
                    <SideNav.Nav defaultSelected="dashboard">
                        <NavItem eventKey="dashboard">
                            <NavIcon>
                                <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                            </NavIcon>
                            <NavText>
                                Home
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="employees">
                            <NavIcon>
                                <i className="fa fa-fw fa-users" style={{ fontSize: '1.75em' }} />
                            </NavIcon>
                            <NavText>
                                Employees
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="logout">
                            <NavIcon>
                                <i className="fa fa-fw fa-sign-out-alt" style={{ fontSize: '1.75em' }} />
                            </NavIcon>
                            <NavText>
                                Logout
                            </NavText>
                        </NavItem>
                    </SideNav.Nav>
                </SideNav>
            {/* </ClickOutside> */}
            </React.Fragment>



        // <div className="siderbarComponent">
        //     <div>
        //         <Link to="/dashboard">
        //             <img src={admin} className="mt-50" width="100%" />
        //         </Link>
        //         <h1>
        //             <Link to="/dashboard" className="sidebar-heading center">
        //                 Dashboard
        //             </Link>
        //         </h1>
        //         <h1>
        //             <Link to="/competitions" className="sidebar-heading center">
        //                 Competitions
        //             </Link>
        //         </h1>
        //         <h1>
        //             <Link to="" className="sidebar-heading center">
        //                 Promo Code
        //             </Link>
        //         </h1>




        //     </div>
        //     <div className="btn-fixed">
        //         <div className="input-group ">
        //             <div className="custom-file w-100">
        //                 <label className="custom-file-label w-100 text-center btn btn-upload" htmlFor="inputGroupFile02" aria-describedby="inputGroupFileAddon02">
        //                     <img src={upload} />
        //                     <span className="pl-14" onClick={() => dispatch(logout())}>Logout</span>
        //                 </label>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    );
};
