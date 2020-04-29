import React from "react";
import { Helmet } from "react-helmet";

import "./NotFound.scss"

export default () => {
    return (
        <>
            <Helmet>
                <meta name="description" content=""/>
                <meta name="keywords" content=""/>
                <title>404 Page Not Found</title>
            </Helmet>
            <main role="main" id="not-found">

            </main>
        </>
    );
};