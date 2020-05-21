import {Component, createContext, useContext} from 'react';

export function setAuth(props) {
}

function Auth() {
    const jwt = localStorage.getItem('token')
    let jwtParsed;
    let rolle;
    try {
        if (jwt) {
            let jwtData = jwt.split('.')[1]
            let decoded = window.atob(jwtData)
            let decodedData = JSON.parse(decoded)
            if (decodedData['UserRole'] >= 0) {
                rolle = "Model"
            } else {
                rolle = "Manager"
            }
            //console.log(rolle)
            console.log(decodedData)
        }
    } catch (error) {
        console.log(error)
    }
    return false;
}

export function getRole() {
    const jwt = localStorage.getItem('jwt')
    let jwtParsed;
    let rolle;
    try {
        if (jwt) {
            let jwtData = jwt.split('.')[1]
            let decoded = window.atob(jwtData)
            let decodedData = JSON.parse(decoded)
            console.log(decodedData)
            switch (decodedData['RoleClearText']) {
                case "Admin":
                    rolle = "Admin"
                    console.log("getRole says: Role is" + rolle)
                    break;
                case "Coordinator":
                    rolle = "Coordinator"
                    console.log("getRole says: Role is " + rolle)
                    break;
            }
        }
    } catch (error) {
        console.log(error)
    }
    return rolle;
}
