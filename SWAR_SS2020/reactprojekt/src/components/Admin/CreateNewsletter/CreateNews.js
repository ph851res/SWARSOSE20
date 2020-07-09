import React, {Component, useState} from 'react'


function CreateNews(props) {
    const [title, setTitle] = useState("");
    const [subtile, setSubtitle] = useState("");
    const [content, setContent] = useState("");

    const back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.addArticle(title, subtile, content);
        setTitle('');
        setSubtitle('');
        setContent('');
    }
    return (
        <div className="container mt-5">
            <div className="card mt-1 p-2" style={formStyle}>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="">Titel</label>
                        <input type="text" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Untertitel</label>
                        <input type="text" className="form-control" value={subtile} onChange={(e) => setSubtitle(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Inhalt</label>
                        <textarea name="message" rows="10" className="form-control" value={content} onChange={(e) => setContent(e.target.value)}></textarea>
                    </div>
                    <div className="row mt-2">
                        <div className="col"><input type="submit" value="Zurück"
                                                    className="form-control btn btn-primary"/></div>
                        <div className="col"></div>
                        <div className="col"><input type="submit" value="Erstellen"
                                                    className="form-control btn btn-primary"/></div>
                    </div>
                </form>
            </div>
        </div>
    )
}

const formStyle = {
    width: '600px',
    margin: 'auto'
}

const centerText = {
    textAlign: 'center'
}

export default CreateNews