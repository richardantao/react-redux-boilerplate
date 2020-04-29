import React from "react";
import { Switch, Route } from "react-router-dom";

import Loadable from "react-loadable";

import Nav from "./components/organisms/Nav";

import "./App.scss";

const ErrorBoundary = Loadable({
    loader: () => import(/* webpackChunkName: "ErrorBoundary" */ "./components/pages/ErrorBoundary"),
    loading: <></>
});

const Home = Loadable({
    loader: () => import(/* webpackChunkName: "Home" */ "./components/pages/Home"),
    loading: <></>
});

const About = Loadable({
    loader: () => import(/* webpackChunkName: "About" */ "./components/pages/About"),
    loading: <></>
});

const Contact = Loadable({
    loader: () => import(/* webpackChunkName: "Contact" */ "./components/pages/Contact"),
    loading: <></>
});

const NotFound = Loadable({
    loader: () => import(/* webpackChunkName: "NotFound" */ "./components/pages/NotFound"),
    loading: <></>
});

export default () => {
    return (
        <ErrorBoundary>
            <Nav/>
            <Switch>
                <Route path="/about" component={About}/>
                <Route path="/contact" component={Contact}/>
                <Route exact path="/" component={Home}/>
                <Route path="*" component={NotFound}/>
            </Switch>
        </ErrorBoundary>
    );
};

