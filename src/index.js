import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'

const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
}

const Navbar = () =>
  <div>
    <NavLink
      to='/'
      exact
      style={link}
      activeStyle={{ background: 'darkblue' }}
    >Home</NavLink>
    <NavLink
      to='/about'
      exact
      style={link}
      activeStyle={{ background: 'darkblue' }}
    >About</NavLink>
    <NavLink
      to='/login'
      exact
      style={link}
      activeStyle={{ background: 'darkblue' }}
    >Login</NavLink>
  </div>

const Home = () => <h1>Home</h1>

const About = () => <h1>About</h1>

const Login = () =>
  <div>
      <h1>Login</h1>
      <form>
        <div>
          <input type="text" name="username" placeholder="Username" />
          <label htmlFor="username">Username</label>
        </div>
        <div>
          <input type="password" name="password" placeholder="Password" />
          <label htmlFor="password">Password</label>
        </div>
        <input type="submit" value="Login" />
      </form>
    </div>;

const App = () => {
  return (
    <Router>
      <div>
        <Nabar />
        <Route exact path='/' render={Home} />
        <Route exact path='/about' render={About} />
        <Route exact path='/login' render={Login} />
      </div>
    </Router>
  );
};

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
