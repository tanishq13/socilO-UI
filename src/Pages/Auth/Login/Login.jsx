import classes from './Login.module.scss';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import FormValidator from '../form';


function Login() {
    const navigate = useNavigate();
    const handleSubmit = ()=>{
        navigate('/main/home');
    }
  return (
    <>
    <div className={classes.container}>
        <div className={classes.loginForm}>
      <FormValidator handleSubmit={handleSubmit}/>
      </div>
    </div>
    </>
  );
}

export default Login;
