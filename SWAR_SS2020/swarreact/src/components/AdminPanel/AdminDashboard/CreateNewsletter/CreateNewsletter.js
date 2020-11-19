import React, {Component} from 'react';

class CreateNewsletter extends Component {
    state = {
        title: '',
        subtitle: '',
        content: ''
    }

    onChange = (e) => {
        const value = e.target.value;
        this.setState({
            ...this.state, [e.target.name]: value
        });
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addNewsletter(this.state.title, this.state.subtitle, this.state.content);
    }

    onClick = (e) => {
        e.preventDefault();
        this.props.onSubmitBack();
    }

    render() {
        return (
            <div className="container mt-5">
                <div className="card mt-1 p-2" style={formStyle}>
                    <form onSubmit={this.onSubmit} action={""}>
                        <div className="form-group">
                            <label htmlFor="">Titel</label>
                            <input type="text" name="title" className="form-control" value={this.title}
                                   onChange={this.onChange}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Untertitel</label>
                            <input type="text" name="subtitle" className="form-control" value={this.subtitle}
                                   onChange={this.onChange}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Inhalt</label>
                            <textarea name="content" rows="10" className="form-control" value={this.content}
                                      onChange={this.onChange}></textarea>
                        </div>
                        <div className="row mt-2">
                            <div className="col">
                                <button type="button" onClick={this.onClick}
                                        className="form-control btn btn-primary">Zurück
                                </button>
                            </div>
                            <div className="col">
                                <input name="create" type="submit" value="Erstellen"
                                       className="form-control btn btn-primary"/></div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

const formStyle = {
    margin: 'auto'
}


export default CreateNewsletter;