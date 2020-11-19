import React, {Component} from 'react';

class Login extends Component {
    state = {
        userName: '',
        userPassword: ''
    }

    onChange = (e) => {
        const value = e.target.value;
        this.setState({...this.state, [e.target.name]: value
        });
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addUser(this.state.userName);
    }

    render() {
        return (
            <div style={formStyle} className="mt-2">
                <h2>Login</h2>
                <div className="card mt-1 p-2">
                    <form onSubmit={this.onSubmit} action="">
                        <div className="form-group">
                            <label>Name</label>
                            <input type="text" name="userName" value={this.state.userName} onChange={this.onChange} className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label>Passwort</label>
                            <input type="password" name="userPassword" value={this.state.userPassword} onChange={this.onChange} className="form-control"/>
                        </div>
                        <input type="submit" value="Login" className="form-control btn btn-primary"/>
                    </form>
                </div>
            </div>
        );
    }
}

const formStyle = {
    width: '450px',
    margin: 'auto'
}

export default Login;