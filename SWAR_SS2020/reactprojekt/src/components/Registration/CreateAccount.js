import React, { Component } from 'react'

class CreateAccount extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    render() {
        return (
            <div className="card mt-1 p-2" style={formStyle}>
                <h1>Registration</h1>
                <form onSubmit={this.onSubmit}>
                    <div className="row">
                        <div className="col">
                            <div className="form-group">
                                <label htmlFor="">Vorname</label>
                                <input
                                    type="text"
                                    name="firstName"
                                    placeholder="Vorname"
                                    className="form-control"
                                    value={this.props.firstName}
                                    onChange={this.props.onChange}
                                />
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-group">
                                <label htmlFor="">Name</label>
                                <input
                                    type="text"
                                    name="lastName"
                                    placeholder="Name"
                                    className="form-control"
                                    value={this.props.lastName}
                                    onChange={this.props.onChange}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">E-Mail</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="E-Mail"
                            className="form-control"
                            value={this.props.email}
                            onChange={this.props.onChange}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="">Passwort</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Passwort"
                            className="form-control"
                            value={this.props.password}
                            onChange={this.props.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Zahlungsmethode</label>
                        <select id="lang" onChange={this.props.handleSelect} className="form-control">
                            <option value="payPal">PayPal</option>
                            <option value="kreditkarte">Kreditkarte</option>
                        </select>
                    </div>
                    <input
                        type="submit"
                        value="Bestätigen"
                        className="btn btn-primary form-control"
                        onClick={this.continue}
                    />
                </form>
            </div>
        )

    }
}

const formStyle = {
    width: '450px',
    margin: 'auto'

}
export default CreateAccount