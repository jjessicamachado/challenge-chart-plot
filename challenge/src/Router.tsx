import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from "./App";

export default () => {

    return (
        <Router>
            {/* <ErrorBoundary FallbackComponent={ErrorPage}> */}
            {/* <Topbar />
        <Sidebar /> */}
            <Route exact path="/">
                <App />
            </Route>
            {/* </ErrorBoundary> */}
        </Router>
    )

}