import React, {Component} from 'react'

class createNews extends Component {
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        return (
            <div className="card mt-1 p-2" style={formStyle}>
                <h1>Dashboard</h1>
                <div className="card mt-2">
                    <div className="card-body">
                        <h4 className="card-title">Newsletter schreiben</h4>
                        <p className="card-text">Neuen Newsletter erstellen und veröffentlichen</p>
                        <a href="/dashboard/newsletter/erstellen" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
                <div className="card mt-2">
                    <div className="card-body">
                        <h4 className="card-title">Abonnenten verwalten</h4>
                        <p className="card-text">Abonnenten verwalten und Änderungen durchführen</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        )
    }
}

const formStyle = {
    margin: 'auto'
}
const cardStyle = {
    width: '600px'
}

export default createNews