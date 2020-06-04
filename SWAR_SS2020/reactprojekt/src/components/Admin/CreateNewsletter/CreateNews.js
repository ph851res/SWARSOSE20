import React, { Component } from 'react'

class CreateNews extends Component {
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }
    render() {
        return (
            <div className="container mt-5">
                <div className="card mt-1 p-2" style={formStyle}>
                    <form >
                        <div className="form-group">
                            <label htmlFor="">Titel</label>
                            <input type="text" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Untertitel</label>
                            <input type="text" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Inhalt</label>
                            <textarea name="message" rows="10" className="form-control"></textarea>
                        </div>
                        <div className="row mt-2">
                            <div className="col"><input type="submit" value="Zurück" className="form-control btn btn-primary"/></div>
                            <div className="col"></div>
                            <div className="col"><input type="submit" value="Erstellen" className="form-control btn btn-primary"/></div>
                        </div>
                    </form>
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

export default CreateNews