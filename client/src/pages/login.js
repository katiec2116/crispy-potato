import React from 'react'
import Login from "../components/Login"

function LoginPage() {
    return (
        <div>
            <section className="hero">
                <div className="hero-body p-1">
                    <div className="columns" >
                        <div className="column is-10 is-offset-1 has-text-centered" style={{ marginTop: "5%" }}>
                            <div className="welcome is-rounded has-text-centered">
                                <div className="logoTitle pb-3">myapp</div>
                                <Login />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default LoginPage
