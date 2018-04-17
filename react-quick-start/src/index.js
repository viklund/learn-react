import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';


function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

const user = {
    firstName: 'Harper',
    lastName: 'Perez',
};

function NormalWelcome(props) {
    return <h1>Hello and welcome, {props.name}</h1>;
}

function AdminWelcome(props) {
    return <h1>Welcome, secret person: {props.name}!</h1>
}

function Welcome(props) {
    const isAdmin = props.isAdmin;
    if (isAdmin) {
        return <AdminWelcome name={props.name} />
    }
    return <NormalWelcome name={props.name} />
}

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
    }
}

class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                { this.state.isToggleOn ? "ON" : "OFF" }
            </button>
        );
    }
}

function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}


function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

function LoginButton(props) {
    return (
        <button onClick={props.onClick}>
            Login
        </button>
    );
}

function LogoutButton(props) {
    return (
        <button onClick={props.onClick}>
            Logout
        </button>
    );
}


class LoginControl extends React.Component {
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {isLoggedIn: false};
    }

    handleLoginClick() {
        this.setState({isLoggedIn: true});
    }

    handleLogoutClick() {
        this.setState({isLoggedIn: false});
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;

        const button = isLoggedIn ? (<LogoutButton onClick={this.handleLogoutClick} /> ) 
                                  : (<LoginButton  onClick={this.handleLoginClick}  /> );

        return (
            <div>
                <Greeting isLoggedIn={isLoggedIn} />
                {button}
            </div>
        );
    }
}


ReactDOM.render(
    <div>
        <Welcome name={formatName(user)} isAdmin={false} />
        <Clock />
        <Toggle />
        <LoginControl />
        <p>We are just writing some stuff here {<span>but this works {"string?"}</span>}!</p>
    </div>,
    document.getElementById('root')
);

registerServiceWorker();
