import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import Login from "./components/Login/Login";
import Header from "./components/Header/Header";
import Newsletters from "./components/Newsletter/Newsletterdashboard/Newsletters";
import Startpage from "./components/Startpage/Startpage";
import AdminDashboard from "./components/AdminPanel/AdminDashboard/AdminDashboard";
import Logout from "./components/Login/Logout";

class App extends Component {
    state = {
        step: '',
        user: {
            name: '',
            password: ''
        },
        newsletters: [
            {
                title: 'Title',
                subtitle: 'Subtitle',
                content: 'Some newsletter content.'
            },
            {
                title: 'Title',
                subtitle: 'Subtitle',
                content: 'Some newsletter content.'
            },
            {
                title: 'Title',
                subtitle: 'Subtitle',
                content: 'Some newsletter content.'
            }
        ],
        subscribers: [
            {
                id: '0',
                name: 'Bernd',
                email: 'bernd@dummy.de'
            },
            {
                id: '1',
                name: 'James',
                email: 'james@dummy.de'
            },
        ]
    }

    increaseStep = () => {
        this.setState({step: 0})
    }

    logout = () => {
        this.setState({step: ''})
    }

    addUser = (userName) => {
        const newUser = {
            name: userName,
            password: ''
        };
        this.setState({
            user: newUser, step: 1
        });
        console.log(newUser);
    }

    addNewsletter = (title, subtitle, content) => {
        const newNewsletter = {
            title,
            subtitle,
            content
        }
        this.setState({newsletters: [...this.state.newsletters, newNewsletter]});
    }

    deleteUser = id => {
        console.log(id)
        const subscribers = this.state.subscribers.filter(subscriber => subscriber.id !== id);
        console.log(subscribers)
        this.setState({ subscribers: subscribers });
    }

    render() {

        switch (this.state.step) {
            case 0:
                return (
                    <div className="App">
                        <Header name={this.state.user.name}/>
                        <Login addUser={this.addUser}/>
                    </div>
                );
                break;
            case 1:
                return (
                    <div className="App">
                        <Header name={this.state.user.name}/>
                        <Newsletters newsletters={this.state.newsletters}/>
                        <Logout logout={this.logout}/>
                    </div>
                );
                break;
            default:
                return (
                    <Router>
                        <body>
                        <Switch>
                            <Route exact path="/">
                                <Header/>
                                <Startpage increaseStep={this.increaseStep}/>
                            </Route>
                            <Route exact path="/admin/create/newsletter">
                                <Header name="admin"/>
                                <div className="container">
                                    <AdminDashboard addNewsletter={this.addNewsletter} newsletters={this.state.newsletters} subscribers={this.state.subscribers} deleteUser={this.deleteUser}/>
                                </div>
                            </Route>
                        </Switch>
                        </body>
                    </Router>
                );
        }

    }
}

export default App;
