import React from 'react';
import {Route} from 'react-router-dom';
import {getRole} from "./Auth";
import Redirect from "react-router-dom/Redirect";

function CoordinatorRoute({component: Component, ...rest}) {
    let auth = getRole();
    switch (auth) {
        case "Admin": {
            return (
                <Route
                    {...rest}
                    render={props =>
                        (
                            <Component {...props} />
                        )
                    }
                />);
        }
        case "Coordinator": {
            console.log('coordinator privateroute enabled');
            return (
                <Route
                    {...rest}
                    render={props =>
                        (
                            <Component {...props} />
                        )
                    }
                />);
        }
        case "NursingStaff": {
            console.log('NursingStaff privateroute enabled');
            return (
                <Route
                    {...rest}
                    render={props =>
                        (
                            <Redirect to="log-in"/>
                        )
                    }
                />);
        }
    }
}

export default CoordinatorRoute;
