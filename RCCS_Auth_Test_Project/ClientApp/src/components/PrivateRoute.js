import React from 'react';
import {Route} from 'react-router-dom';
import { useAuth } from "./Auth";
import Redirect from "react-router-dom/Redirect";

function PrivateRoute({component: Component, ...rest}) {
    const { authTokens } = useAuth();


    return (
        <Route
            {...rest}
            render={props =>
                authTokens ? (
                    <Component {...props} />
                ) : (
                    <Redirect to="log-in" />
                )
            }
        />
    );
}

export default PrivateRoute;
