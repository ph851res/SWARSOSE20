import React, {Component} from 'react';
import Header from "../../Header/Header";
import Login from "../../Login/Login";
import Newsletters from "../../Newsletter/Newsletterdashboard/Newsletters";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Startpage from "../../Startpage/Startpage";
import CreateNewsletter from "./CreateNewsletter/CreateNewsletter";
import ManageSubscrbers from "./ManageSubscribers/ManageSubscrbers";

class AdminDashboard extends Component {
    state = {
        counter: 0,
        step: ''
    }

    onSubmitCreate = (e) => {
        this.setState({step: 0})
        e.preventDefault();
    }
    onSubmitManage = (e) => {
        this.setState({step: 1})
        e.preventDefault();
    }

    onSubmitBack = () => {
        this.setState({step: ''})
    }

    render() {

        switch (this.state.step) {
            case 0:
                return (
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <CreateNewsletter addNewsletter={this.props.addNewsletter} onSubmitBack={this.onSubmitBack}/>
                            </div>
                            <div className="col">
                                <Newsletters newsletters={this.props.newsletters}/>
                            </div>
                        </div>
                    </div>
                );
                break;
            case 1:
                return (
                    <div className="App">
                        <ManageSubscrbers subscribers={this.props.subscribers} onSubmitBack={this.onSubmitBack} deleteUser={this.props.deleteUser}/>
                    </div>
                );
                break;
            default:
                return (
                    <div className="App mt-5">
                        <div className="card mt-5">
                            <div className="card-body">
                                <h5 className="card-title">Newsletter erstellen</h5>
                                <p className="card-text">Hier kannst du einen neuen Newsletter erstellen</p>
                                <form onSubmit={this.onSubmitCreate} action="">
                                    <input type="submit" value="Create Newsletter" className="btn btn-primary"/>
                                    <a onClick={this.increase}>Hinzufügen</a>
                                    <p>{this.state.counter}</p>
                                </form>
                            </div>
                        </div>
                        <div className="card mt-3">
                            <div className="card-body">
                                <h5 className="card-title">Abonnenten verwalten</h5>
                                <p className="card-text">Hier kannst du Abonnenten verwalten</p>
                                <form onSubmit={this.onSubmitManage} action="">
                                    <input type="submit" value="Manage Subscribers" className="btn btn-primary"/>
                                </form>
                            </div>
                        </div>
                    </div>
                );
        }
    }
}

export default AdminDashboard;