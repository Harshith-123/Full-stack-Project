import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/auth/login`,
        { username, password }
      );
      localStorage.setItem('token', response.data.token);
      // Reload the webpage and navigate to /tasks
      window.location.href = '/tasks';
    } catch (err: any) {
      console.error('Login error:', err.response ? err.response.data : err);
      alert('Invalid credentials');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username: </label>
          <input 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Password: </label>
          <input 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            type="password" 
            required 
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
