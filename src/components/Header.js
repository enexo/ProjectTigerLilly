import React from 'react';

const NavItem = props => {
    const pageURI = window.location.pathname+window.location.search
    const liClassName = (props.path === pageURI) ? "nav-item active" : "nav-item";
    const aClassName = props.disabled ? "nav-link disabled" : "nav-link";
    return (
        <li className={liClassName}>
            <a href={props.path} className={aClassName}>
                {props.name}
                {(props.path === pageURI) ? (<span className="sr-only">(current)</span>) : ''}
            </a>
        </li>
    );
};

class NavDropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: false
        };
    }
    showDropdown(e) {
        e.preventDefault();
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }
    render() {
        const classDropdownMenu = 'dropdown-menu' + (this.state.isToggleOn ? ' show' : '');
        return (
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown"
                   aria-haspopup="true" aria-expanded="false"
                   onClick={(e) => {this.showDropdown(e)}}>
                    {this.props.name}
                </a>
                <div className={classDropdownMenu} aria-labelledby="navbarDropdown">
                    {this.props.children}
                </div>
            </li>
        )
    }
}


class Navigation extends React.Component {
    render() {
        return (
            <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light cheeriness">
                <a className="navbar-brand" href="/">ChessEnvoy</a>

                    <ul className="navbar-nav mr-auto">

                        <NavItem path="/" name="Home" />
                        <NavItem path="/live-streams" name="Streaming Now" />

                        <NavDropdown name="Streamers">
                            <a className="dropdown-item" href="/eric-rosen">Eric Rosen</a>
                            <a className="dropdown-item" href="/chessnetwork">ChessNetwork</a>
                            <a className="dropdown-item" href="/christof-sielecki">Christof Sielecki</a>
                            <a className="dropdown-item" href="/john-bartholomew">John Bartholomew</a>
                            <a className="dropdown-item" href="/alexandra-botez">Alexandra Botez</a>
                            <a className="dropdown-item" href="/agadmator">Agadmator</a>
                        </NavDropdown>

                        <NavItem path="/about" name="About" />
                    </ul>

            </nav>
            </div>
        )
    }
}

export default Navigation;



