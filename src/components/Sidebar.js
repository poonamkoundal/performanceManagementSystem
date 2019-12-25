import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../actions/user';

import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

export default (history) => {
    const dispatch = useDispatch();
    const { user } = useSelector(state => state);
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
                    if (selected === 'logout') {
                        dispatch(logout());
                    } else if (history.location.pathname !== to) {
                        history.history.push(to);
                    }
                }}
            >
                <SideNav.Toggle />
                <SideNav.Nav defaultSelected="home">
                    {[2].includes(user.role) &&
                        <React.Fragment>
                            <NavItem eventKey="home">
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
                        </React.Fragment>
                    }
                    {[3, 4].includes(user.role) &&
                        <NavItem eventKey="dashboard">
                            <NavIcon>
                                <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                            </NavIcon>
                            <NavText>
                                Dashboard
                            </NavText>
                        </NavItem>
                    }
                    {[2, 3, 4].includes(user.role) &&
                        <NavItem eventKey="projects">
                            <NavIcon>
                                <i className="fas fa-folder-open" style={{ fontSize: '1.75em' }} />
                            </NavIcon>
                            <NavText>
                                Projects
                        </NavText>
                        </NavItem>
                    }
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
        </React.Fragment >
    );
};
