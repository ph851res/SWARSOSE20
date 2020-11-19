import React, {Component} from 'react';

class Startpage extends Component {
    onSubmit = (e) => {
        e.preventDefault();
        this.props.increaseStep();
    }
    render() {
        return (
            <div>
                <div className="card">
                    <div className="card-body">
                        <h1>Willkommen auf unserer Newsletterseite</h1>
                        <p className="card-text">Hier für Newsletter anmelden</p>
                        <form onSubmit={this.onSubmit} action="">
                            <input type="submit" value="Login" className="btn btn-primary"/>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Startpage;