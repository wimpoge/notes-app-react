import React from 'react';
import { login } from '../utils/network-data';
import PropTypes from 'prop-types';
import LoginInput from '../components/LoginInput';
import { Link } from 'react-router-dom';
function Login({loginSuccess}) {
    async function onLogin({ email, password }) {
        const { error, data } = await login({ email, password });
        if (!error) {
          loginSuccess(data);
        }
      }
     
      return (
        <section>
          <h2>Silakan masuk untuk melanjutkan ...</h2>
          <LoginInput login={onLogin} />
          <p>Belum punya akun? <Link to="/register">Daftar di sini.</Link></p>
        </section>
      );
    }
     
    Login.propTypes = {
      loginSuccess: PropTypes.func.isRequired,
    }

export default Login