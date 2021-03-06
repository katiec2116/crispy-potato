import React, { useEffect, useState } from 'react';
import LoginForm from "./LoginForm";
import Auth from "../utils/Auth";
import { useLocation, useHistory } from "react-router";
//Uses the Auth methods to actually login with the LoginForm Component.

function Login() {
    let location = useLocation();
    let history = useHistory();
    const [redirectToReferrer, setRedirectToReferrer] = useState(false);
    const [logError, setError] = useState(false)

    useEffect(() => {

        const { from } = location.state || { from: { pathname: '/explore' } }
        if (redirectToReferrer) {
            history.push(from)
        }

    }, [redirectToReferrer, history, location.state])


    /* We need to POST to the API the users info,
        This will get passed down as a prop to the LoginForm */
    const login = (data) => {
        console.log('Logging in ' + JSON.stringify(data));
        fetch('api/users/register', {
            method: 'POST',
            body: JSON.stringify(data),
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then((response) => {
                if (response.status === 200) { //All good
                    Auth.authenticate(() => { //Update the boolean and take off the cuffs
                        setRedirectToReferrer(true)
                        console.log(`Response in login ${JSON.stringify(response)}`);

                    });
                }
                else {
                    setError(true)
                }
            })
            .catch((err) => {// No beuno, kick them
                console.log('Error logging in.', err);
            });
    }

    return (

        <div>
            <div className="content">
                <LoginForm onLogin={login} alert={logError} />
            </div>
        </div>
    )
}

export default Login;