import React, { Component } from 'react'

class Landingpage extends Component {

    render() {
        return (
            <div>
                <div className="card">
                    <div className="card-body">
                        <h1>Willkommen auf unserer Newsletterseiter</h1>
                        <p className="card-text">Registriere dich jetzt für unsere Newsletter und erfahre viele neue News</p>
                        <a href="/registration" className="btn btn-primary">Registrieren</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Landingpage
