import React from 'react';
import {Route} from 'react-router-dom';
import { getAuth } from "./Auth";
import Redirect from "react-router-dom/Redirect";

function PrivateRoute({component: Component, ...rest}) {
    let auth = getAuth();

    return (
        <Route
            {...rest}
            render={props =>
                auth ? (
                    <Component {...props} />
                ) : (
                    <Redirect to="log-in" />
                )
            }
        />
    );
}

export default PrivateRoute;
