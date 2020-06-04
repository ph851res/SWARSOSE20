import React, { Component } from 'react'
import CreateAccount from "./CreateAccount";
import ConfirmAbonnement from "./ConfirmAbonnement";


class RegistrationForm extends Component {
    state = {
        user: { firstName: '', lastName: '', email: '', password: '', paymentMethod: ''},
        step: 1
    }

    handleChange = e => this.setState({paymentMethod: e.target.value});
    onChange = (e) => {/*this.setState({[e.target.name]: e.target.value});*/
        const { user } = { ...this.state };
        const currentState = user;
        const { name, value } = e.target;
        currentState[name] = value;
        this.setState({ user: currentState });
    }

    nextStep = () => {
        const step = this.state.step;
        this.setState({
                step: step+1
            });
    };

    prevStep = () => {
        const step = this.state.step;
        this.setState({
            step: step-1
        });
    };

    render() {
        switch(this.state.step) {
            case 1:
                return (<CreateAccount onChange={this.onChange} addUser={this.addUser} nextStep={this.nextStep}/>);
            case 2:
                return (<ConfirmAbonnement prevStep={this.prevStep}/>);
        }
    }
}
export default RegistrationForm