import React, { Component } from 'react'

class NewsletterDashboard extends Component {

    render() {
        return (
            <div className="container mt-5">
                <div className="row mt-2">
                    <div className="col">
                        <div className="card">
                            <div className="card-body">
                                <h3 className="card-title">Newsletter A</h3>
                                <p className="card-text">Hier steht der Preview Text des Artikels, mit kurzen Informationen.</p>
                                <a href="#" className="btn btn-primary">Zum Artikel</a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <div className="card-body">
                                <h3 className="card-title">Newsletter B</h3>
                                <p className="card-text">Hier steht der Preview Text des Artikels, mit kurzen Informationen.</p>
                                <a href="#" className="btn btn-primary">Zum Artikel</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col">
                        <div className="card">
                            <div className="card-body">
                                <h3 className="card-title">Newsletter C</h3>
                                <p className="card-text">Hier steht der Preview Text des Artikels, mit kurzen Informationen.</p>
                                <a href="#" className="btn btn-primary">Zum Artikel</a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <div className="card-body">
                                <h3 className="card-title">Newsletter D</h3>
                                <p className="card-text">Hier steht der Preview Text des Artikels, mit kurzen Informationen.</p>
                                <a href="#" className="btn btn-primary">Zum Artikel</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsletterDashboard