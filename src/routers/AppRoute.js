/*
 * @file: AppRoute.js
 * @description: Defined routers layouts
 * @date: 28.11.2019
 * @author: 
*/

/************ React Pages according to layouts  *****************/

import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const AppRoute = ({
    component: Component,
    layout: Layout,
    requireAuth,
    to = '/',
    store,
    type = 'private',
    role = [1, 2, 3, 4, 5],
    ...rest
}) => (
        <Route
            {...rest}
            render={props => {
                const user = requireAuth(store);
                if ((user.loggedIn && role.includes(user.role)) && props.location.pathname === '/') {
                    return (
                        <Redirect
                            to={{
                                pathname: role === 2 ? '/home' : '/dashboard',
                                state: { from: props.location }
                            }}
                        />
                    );
                }
                if (type === 'public') {
                    return (
                        <Layout>
                            <Component {...props} />
                        </Layout>
                    );
                }
                return (user.loggedIn && role.includes(user.role)) || props.location.pathname === '/' ? (
                    <Layout>
                        <Component {...props} />
                    </Layout>
                ) : (
                        <Redirect
                            to={{
                                pathname: to,
                                state: { from: props.location }
                            }}
                        />
                    );
            }}
        />
    );

export default AppRoute;