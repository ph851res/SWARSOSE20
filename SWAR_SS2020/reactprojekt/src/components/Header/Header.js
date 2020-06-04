import React, { Component } from 'react'

class Header extends Component {

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-sm" style={navStyle}>
                    <a href="#" className="navbar-brand" style={a}>Newsletter</a>
                    <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarMenu">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarMenu">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a href="#" className="nav-link" style={a}>News</a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link" style={a}></a>
                            </li>
                        </ul>
                    </div>

                </nav>
            </div>
        )
    }
}

const navStyle = {
    backgroundColor: 'blue',
}

const a = {
    color: '#ffffff'
}
export default Header

