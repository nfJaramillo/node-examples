import React, { useEffect } from 'react';
import { useForm } from '../hooks/useForm';
import './Login.scss';
import {LoginContext} from '../context/LoginContext';
import  {useContext} from 'react';
import { useNavigate } from "react-router-dom";
const url = '/api/auth/login';

export const Login = () => {

  useEffect(() => {
    toggleLogin("");
  }, []);

  const navigate = useNavigate();

  const {toggleLogin} = useContext(LoginContext);

  const [formValues, handleInputChange] = useForm({
    username: '',
    password: ''
  });

  const { username, password } = formValues;


  const handleSubmit = (e) => {
    e.preventDefault();
    fetchLogin();
  };

  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formValues)
};

  const fetchLogin = async () => {
    const resp = await fetch(url, requestOptions);
    const data = await resp.json();
    
    if(data["success"] === false){
      alert(data["msg"])
    }
    else{
      toggleLogin(data["token"])
      navigate("/products");
    }
  };

  return (
    <div className='contact-container'>
      <form className='contact-form' onSubmit={handleSubmit}>
        <h2>Login</h2>
        <hr />

        <div className='form-group'>
          <input
            type='text'
            name='username'
            className='form-control'
            placeholder='Username'
            autoComplete='off'
            value={username}
            onChange={handleInputChange}
          />
        </div>

        <div className='form-group'>
          <input
            type='password'
            name='password'
            className='form-control'
            placeholder='password'
            autoComplete='off'
            value={password}
            onChange={handleInputChange}
          />
        </div>

        <button type='submit' className='btn btn-primary'>
          Sing in
        </button>
      </form>
    </div>
  );
};
