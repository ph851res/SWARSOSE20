import React, {Component} from 'react';
import NewsletterItem from "./NewsletterItem";

class Newsletters extends Component {

    render() {

        return this.props.newsletters.map((newsletter) => (
            <NewsletterItem newsletter={newsletter}/>
        ));

    }
}

export default Newsletters;