/*********** Routes for applications **************/
import React from 'react';
import { Switch } from "react-router-dom";
import AppRoute from './AppRoute';
import { Auth } from '../auth';
import { publicLayout, privateLayout } from '../components/Layouts';
import NotFound from '../components/NoFound';
import Login from '../containers/login';
import Dashboard from '../containers/dashboard';
import Employees from '../containers/dashboard/employees';
import EmployeesAdd from '../containers/dashboard/employees/add';
// remove the below route
import CompetitionsAdd from '../containers/competitions/add';

const Routers = store => {
    return (
        <Switch>
            <AppRoute
                exact={true}
                path="/"
                component={Login}
                requireAuth={Auth}
                layout={publicLayout}
                store={store}
                type="public"
            />
            <AppRoute
                exact={true}
                path="/dashboard"
                component={Dashboard}
                requireAuth={Auth}
                layout={privateLayout}
                store={store}
            />
            <AppRoute
                exact={true}
                path="/employees"
                component={Employees}
                requireAuth={Auth}
                layout={privateLayout}
                store={store}
            />
             <AppRoute
                exact={true}
                path="/employees/add"
                component={EmployeesAdd}
                requireAuth={Auth}
                layout={privateLayout}
                store={store}
            />
            <AppRoute
                exact={true}
                path="/competitions/add"
                component={CompetitionsAdd}
                requireAuth={Auth}
                layout={privateLayout}
                store={store}
            />
            <AppRoute
                exact
                path="*"
                component={NotFound}
                requireAuth={Auth}
                layout={publicLayout}
                store={store}
                type="public"
            />
        </Switch>
    );
};

export default Routers;