import React from 'react';
import { Route, Switch, Redirect, Link } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Tasks from './components/Tasks';

const App: React.FC = () => {
  const isAuthenticated = !!localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login';
  };

  return (
    <div>
      <nav>
        {isAuthenticated ? (
          <>
            <Link to="/tasks">Tasks</Link> |{' '}
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link> | <Link to="/register">Register</Link>
          </>
        )}
      </nav>
      <Switch>
        <Route path="/login">
          {isAuthenticated ? <Redirect to="/tasks" /> : <Login />}
        </Route>
        <Route path="/register">
          {isAuthenticated ? <Redirect to="/tasks" /> : <Register />}
        </Route>
        <Route path="/tasks">
          {isAuthenticated ? <Tasks /> : <Redirect to="/login" />}
        </Route>
        <Route path="/">
          <Redirect to={isAuthenticated ? "/tasks" : "/login"} />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
