import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from "./App";
import Header from "./Header";

export default () => {

    return (
        <Router>
            {/* <ErrorBoundary FallbackComponent={ErrorPage}> */}
            <Header />
            {/* <Sidebar /> */}
            <div className="bodyContainer">
                <Route exact path="/">
                    <App />
                </Route>
            </div>
            {/* </ErrorBoundary> */}
        </Router>
    )

}