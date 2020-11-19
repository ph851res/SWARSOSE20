import React, {Component} from 'react';

class ManageSubscrbers extends Component {
    onSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmitBack();
    }

    renderTableData() {
        return this.props.subscribers.map((subscriber) => {
            const {id, name, email} = subscriber //destructuring
            return (
                <tr>
                    <td>{name}</td>
                    <td>{email}</td>
                    <td>
                        <button type="button" onClick={() => this.props.deleteUser(id)} className="btn btn-danger float-right">Delete</button>
                    </td>
                </tr>
            )
        })
    }

    render() {
        return (
            <div lassName="container">
                <h1>Nutzer</h1>
                <table class="table">
                    <tbody>
                    {this.renderTableData()}
                    </tbody>
                </table>
                <form onSubmit={this.onSubmit} action="">
                    <input type="submit" value="Zurück" className="btn btn-primary"/>
                </form>
            </div>
        )
    }

}

export default ManageSubscrbers;