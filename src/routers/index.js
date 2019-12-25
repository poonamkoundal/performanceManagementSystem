/*********** Routes for applications **************/
import React from 'react';
import { Switch } from "react-router-dom";
import AppRoute from './AppRoute';
import { Auth } from '../auth';
import { publicLayout, adminLayout, privateLayout } from '../components/Layouts';
import NotFound from '../components/NoFound';
import Login from '../containers/login';
import Dashboard from '../containers/dashboard/layouts';
import AdminDashboard from '../containers/dashboard/layouts/admindashboard';
import Employees from '../containers/dashboard/employees';
import EmployeesAdd from '../containers/dashboard/employees/add';
import Projects from '../containers/dashboard/project';
import ProjectAdd from '../containers/dashboard/project/add';
import Assesment from '../containers/dashboard/assesment';
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
            {/* layout for admin */}
            <AppRoute
                exact={true}
                path="/home"
                component={AdminDashboard}
                requireAuth={Auth}
                layout={adminLayout}
                store={store}
                role={[2]}
            />
            {/* layout of other users */}
            <AppRoute
                exact={true}
                path="/dashboard"
                component={Dashboard}
                requireAuth={Auth}
                layout={privateLayout}
                store={store}
                role={[1, 3, 4, 5]}
            />
            <AppRoute
                exact={true}
                path="/employees"
                component={Employees}
                requireAuth={Auth}
                layout={adminLayout}
                store={store}
                role={[2]}
            />
            <AppRoute
                exact={true}
                path="/employees/add"
                component={EmployeesAdd}
                requireAuth={Auth}
                layout={adminLayout}
                store={store}
                role={[2]}
            />
            <AppRoute
                exact={true}
                path="/projects"
                component={Projects}
                requireAuth={Auth}
                layout={adminLayout}
                store={store}
                role={[2, 3, 4]}
            />
            <AppRoute
                exact={true}
                path="/projects/add"
                component={ProjectAdd}
                requireAuth={Auth}
                layout={adminLayout}
                store={store}
                role={[2]}
            />
            <AppRoute
                exact={true}
                path="/assesment"
                component={Assesment}
                requireAuth={Auth}
                layout={adminLayout}
                store={store}
                role={[3, 4]}
            />
            <AppRoute
                exact={true}
                path="/competitions/add"
                component={CompetitionsAdd}
                requireAuth={Auth}
                layout={adminLayout}
                store={store}
                role={[2]}
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