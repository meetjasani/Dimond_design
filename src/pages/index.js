import React from 'react'
import { Route, Switch } from 'react-router'
import Layout from '../layout/Layout'
import LogRegLayout from '../layout/LogRegLayout'
import Dashboard from './dashboard/Dashboard'
import Fees from './fees/Fees'
import HelpDesk from './helpdesk/HelpDesk'
import Jewel from './jewel/Jewel'
import Kapan from './kapan/Kapan'
import Login from './login/Login'
import Createyouraccount from './myaccount/Createyouraccount'
import Sale from './sale/Sale'
import SitesView from './sites/SitesView'
import Stock from './stock/Stock'
import SuperChat from './superchat/SuperChat'
import TeamWork from './team/TeamWork'

const Index = () => {

    const defaultLayout = ({ children }) => {
        return <Layout>
            {children}
        </Layout>
    }
    // const loginLayout = ({ children }) => {
    //     return <LogRegLayout>
    //         {children}
    //     </LogRegLayout>
    // }

    return (
        <Switch>
            {/* <RouteWrapper exact path="/" component={Login} layout={loginLayout} /> */}
            <RouteWrapper exact path="/" component={Dashboard} layout={defaultLayout} />
            <RouteWrapper path="/sale" component={Sale} layout={defaultLayout} />
            <RouteWrapper path="/stock" component={Stock} layout={defaultLayout} />
            <RouteWrapper path="/kapan" component={Kapan} layout={defaultLayout} />
            <RouteWrapper path="/jewel" component={Jewel} layout={defaultLayout} />


            <RouteWrapper path="/helpdesk" component={HelpDesk} layout={defaultLayout} />
            <RouteWrapper path="/sites" component={SitesView} layout={defaultLayout} />
            <RouteWrapper path="/teamwork" component={TeamWork} layout={defaultLayout} />
            <RouteWrapper path="/chats" component={SuperChat} layout={defaultLayout} />
            <RouteWrapper path="/fees" component={Fees} layout={defaultLayout} />
            {/* <RouteWrapper  path="/account" component={Createyouraccount} layout={loginLayout}/> */}
        </Switch>
    )
}



export default Index

function RouteWrapper({
    component: Component,
    layout: Layout,
    ...rest
}) {
    return (
        <Route {...rest} render={(props) =>
            <Layout {...props}>
                <Component {...props} />
            </Layout>
        } />
    );
}
