import React, { Component } from 'react'

class ConfirmAbonnement extends Component {
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }
    render() {
        return (
            <div className="card mt-1 p-2" style={formStyle}>
                <h1>Abonnement bestätigen</h1>
                <p style={centerText}>Bitte bestätigen Sie ihre Angaben, um die Registration abzuschließen
                und das Abonnement unseres Newsletters zu beginnen.
                </p>
                <div className="row">
                    <div className="col">
                        <input type="submit"
                               value="Zurück"
                               onClick={this.back}
                               className="btn btn-primary form-control"/>
                    </div>
                    <div className="col">
                        <a href="/newsletterdashboard" className="btn btn-primary form-control">Abonnement abschließen</a>
                    </div>
                </div>
            </div>
        )
    }
}
const formStyle = {
    width: '600px',
    margin: 'auto'
}

const centerText = {
    textAlign: 'center'
}

export default ConfirmAbonnement