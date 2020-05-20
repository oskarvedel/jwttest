import {Component, createContext, useContext} from 'react';

export function setAuth(props) {
}

export function getAuth() {
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
            console.log(rolle)
        }
    } catch (error) {
        console.log(error)
    }
    return false;
}
