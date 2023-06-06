import "./Login.css";
import React, { useState } from "react";
import Ads from "../Ads";
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";


function Login() {
  const[user, setUser] = useState({id: '', mail: '', login: '', password: '', phone: ''});
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user.login.trim() || !user.password.trim()) {
      return;
    }
    navigate("/");
  };

  async function fetchgetUser(){
    const response = await axios.get('http://localhost:8081/landlords', {
      params: {
        login: user.login
      }
    });
    const tid = response.data[0].id
    console.log(tid)
}

  return (
    <div className="login">
      <form className="form" onSubmit={handleSubmit}>
        <h1 className="heading">Вход</h1>
        <div className="form-control">
          <input
            type="login"
            placeholder="Логин"
            value={user.login}
            onChange={(e) => setUser({...user, login: e.target.value})}
          />
        </div>
        <div className="form-control">
          <input
            type="password"
            placeholder="Пароль"
            value={user.password}
            onChange={(e) => setUser({...user, password: e.target.value})}
          />
        </div>
        <button onClick={fetchgetUser} type="submit" className="btn bg-blue-600">
          Войти
        </button>
        <Link to="/registration">Зарегистрироваться</Link>
      </form>
    </div>
  );
}
export default Login;
