import "./Registration.css";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Registration = ({create}) => {
  const[user, setUser] = useState({id: '', mail: '', login: '', password: '', phone: '', type: '' })

  const addUser = (e) => {
    var link1 = "http://localhost:8081/landlords";
    var link2 = "http://localhost:8081/customers";
    e.preventDefault()
    setUser({mail: '', login: '', password: '', phone: '', type: ''})
    if (user.type === "landlord"){
    fetch(link1, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      mail: user.mail,
      login: user.login,
      password: user.password,
      phone: user.phone
    })
  }).then((response) => console.log(response));

  } else {
    fetch(link2, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        mail: user.mail,
        login: user.login,
        password: user.password,
        phone: user.phone
      })
    }).then((response) => console.log(response));
  }
  
}

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user.mail.trim() || !user.password.trim() || !user.type || !user.login.trim()) {
      return;
    }
    navigate("/");
  };

  return ( 
    <div className="registr"> 
      <form className="form" onSubmit={handleSubmit}>
        <h1 className="heading">Регистрация</h1>
        <div className="form-control">
          <input
            type="email"
            placeholder="Почта"
            value={user.mail}
            onChange={(e) => setUser({...user, mail: e.target.value})}
          />
        </div>
        <div className="form-control">
          <input
            type="text"
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
        <div className="form-control">
          <input
            type="tel"
            placeholder="Телефон"
            value={user.phone}
            onChange={(e) => setUser({...user, phone: e.target.value})}
          />
        </div>
        <button onClick={addUser} type="submit" className="btn bg-blue-600">
          Зарегистрироваться
        </button>
        <div className="checkBox">
          <label htmlFor="landlord">
            <input
              type="radio"
              name="landlord"
              value="landlord"
              id="landlord"
              checked={user.type === "landlord"}
              onChange={(e) => setUser({...user, type: e.target.value})}
            />
            Арендодатель
          </label>
          <label htmlFor="customer">
            <input
              type="radio"
              name="customer"
              value="customer"
              id="customer"
              checked={user.type === "customer"}
              onChange={(e) => setUser({...user, type: e.target.value})}
            />
            Заказчик
          </label>
        </div>
        <Link to="/login">Войти</Link>
        
      </form> 
      </div>   
  );
};

export default Registration;
