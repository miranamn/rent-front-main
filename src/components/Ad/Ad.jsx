import React, { useState } from "react";
import "./Ad.css";
import { FaUser } from "react-icons/fa";

const Ad = (props) => {
  return (
    <div className="Card">
      <div className="imgCont">
        <img src={props.image}></img>
      </div>

      <div className="rent-info">
        <div className="rent-about">
          <h2>{props.title}</h2>
          <p className="text">{props.address}</p>
          <p className="cost">От {props.paymentPerHour} ₽</p>
          <p className="text">Вместимость: {props.capacity} человек</p>
        </div>
        <div className="desc">
          <p>{props.description}</p>
        </div>
      </div>

      <div className="infoLord">
        <div className="image">
          <FaUser></FaUser>
        </div>
        <p className="name">{props.login}</p>
        <p className="par">Документы проверены</p>
        <p className="par">
          <a href="">Посмотреть все объекты</a>
        </p>
        <div className="btns">
          <button className="btnBlue">{props.phone}</button>
          <button className="btnWhite">Откликнуться</button>
        </div>
      </div>
    </div>
  );
};

export default Ad;
