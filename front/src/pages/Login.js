import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { useForm } from '../hooks/useForm';
import './Login.scss';

export const Login = () => {
  const { setUser, user } = useContext(UserContext);

  const [{ username, password }, handleInputChange, reset] = useForm({
    username: '',
    password: '',
  });

  const doLogin = async (event) => {
    event.preventDefault();
    const response = await fetch('/api/auth/login', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    }).then((resp) => resp.json());
    console.log(response);
    if (response && response.success) {
      setUser({
        name: response.data.username,
        token: response.token,
        roles: response.data.roles,
      });
    }
  };

  return (
    <div className='container login'>
      {!user && (
        <>
          <form onSubmit={doLogin} className='container form'>
            <h1>Sign in</h1>
            <div className='mb-3'>
              <label htmlFor='username' className='form-label'>
                Username
              </label>
              <input
                type='text'
                className='form-control'
                id='username'
                name='username'
                aria-describedby='username'
                value={username}
                onChange={handleInputChange}
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='password' className='form-label'>
                Password
              </label>
              <input
                type='password'
                className='form-control'
                id='password'
                name='password'
                autoComplete='off'
                value={password}
                onChange={handleInputChange}
              />
            </div>
            <button type='submit' className='btn btn-primary'>
              Sign In
            </button>
          </form>
        </>
      )}
      {user && (
        <div className='logout-container'>
          <h1 id='logout'>Logout</h1>
          <button className='btn btn-warning' onClick={() => setUser(null)}>
            Logout
          </button>
        </div>
      )}
      <h2>User data</h2>
      <pre id='user-data'>{user ? JSON.stringify(user) : 'No data'}</pre>
    </div>
  );
};
