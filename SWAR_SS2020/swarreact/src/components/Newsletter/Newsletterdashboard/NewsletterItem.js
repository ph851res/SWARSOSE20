import React, {Component} from 'react';

class NewsletterItem extends Component {
    render() {
        return (
            <div className="container mt-3">
                <div className="card">
                    <h3 className="card-header">{this.props.newsletter.title}</h3>
                    <div className="card-body">
                        <h5 className="card-title">{this.props.newsletter.subtitle}</h5>
                        <p className="card-text">{this.props.newsletter.content}</p>
                    </div>
                </div>
            </div>
        );

    }
}

export default NewsletterItem;