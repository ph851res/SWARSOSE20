import React, {Component} from 'react';

class Header extends Component {
    state = {
        value: this.props.name
    };

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
                    <a href="#" className="navbar-brand">Newsletter</a>
                    <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarMenu">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarMenu">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link">{this.props.name}</a>
                            </li>
                        </ul>
                    </div>

                </nav>
            </div>
        );
    }
}

export default Header;