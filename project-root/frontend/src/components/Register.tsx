import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Register: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/auth/register`, { username, password });
      alert('Registration successful, please login');
      history.push('/login');
    } catch (err) {
      alert('Error registering');
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username: </label>
          <input value={username} onChange={(e) => setUsername(e.target.value)} required />
        </div>
        <div>
          <label>Password: </label>
          <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" required />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
