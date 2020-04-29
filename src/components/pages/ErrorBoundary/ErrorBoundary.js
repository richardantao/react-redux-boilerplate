import React, { Component } from "react";
import { Helmet } from "react-helmet";

import { connect } from "react-redux";
import { logErrors } from "../../../actions/errors";
import PropTypes from "prop-types";

import { Container } from "reactstrap";

import "./ErrorBoundary.scss";

class ErrorBoundary extends Component {
    state = {
        hasError: false
    };

    static propTypes = {
        logErrors: PropTypes.func.isRequired
    };

    static getDerivedStateFromError(error) {
        return { hasError: true };
    };

    componentDidCatch(error, errorInfo) {
       logErrors(error, errorInfo);
    };

    render() {
        const { hasError } = this.state;
        const { children } = this.props;

        if(!hasError) return children;

        return (
            <>
                <Helmet>
                    <meta name="description" content="An error occured."/>
                    <meta name="keywords" content="error, 400, bad, request"/>
                    <title>Learnify | 400 Bad Request Error</title>
                </Helmet>
                <Container id="error" role="main">
                    An error occurred. Please reload the page.
                </Container>
            </>
        );
    };
};

const mapStateToProps = state => ({

});

const mapDispatchProps = { logErrors };

export default connect(mapStateToProps, mapDispatchProps)(ErrorBoundary);