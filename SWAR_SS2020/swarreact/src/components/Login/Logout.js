import React, {Component} from 'react';

class Logout extends Component {
    onSubmit = (e) => {
        e.preventDefault();
        this.props.logout();
    }
    render() {
        return (
            <div className="container mt-2">
                <form onSubmit={this.onSubmit} action="">
                    <input type="submit" value="Logout" className="btn btn-primary"/>
                </form>
            </div>
        );

    }
}

export default Logout;