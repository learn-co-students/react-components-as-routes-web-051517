import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';

const App = () => {
  return (
  <Router>
    {/* move the <div> tag to be nested inside of the <Router> component */}
    <div>
      <Route exact path="/" render={() => <h1>Home</h1>} />

      <Route exact path="/about" render={() => <h1>About</h1>} />
      <Route exact path="/login" render={() =>
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
        </div>
      } />
    </div>
  </Router>
);
};

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
