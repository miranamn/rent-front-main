import React from "react";
import { Link } from "react-router-dom";
import "./Grid.css";

const Grid = ({ openModal }) => {
  return (
    <div className="grid-container">
      <h1>Полезные ссылки</h1>
      <div className="grid-cont">
        <div className="item item--bg-blue">
          <h2>Объявления - 0 ₽</h2>
          <p>Разместите объявление об аренде вашего помещения</p>
          <button onClick={openModal}>Разместить</button>
        </div>
        <div className="item">
          <h2>Арендовать помещение</h2>
          <Link to="/">в кафе и ресторанах</Link>
          <Link to="/">в бассейне и аквапарке</Link>
          <Link to="/">в бизнец-центре</Link>
          <Link to="/">для деловых встреч</Link>
          <Link to="/">квартиры-студии</Link>
        </div>
        <div className="item item--img">
          {/*<img
            src="https://banketmaster.ru/podborki2016/2018/07/9529232b0c1498b6800d63b741397ccf_thumb.jpg"
            width="400px"
  ></img>*/}
        </div>
        <div className="item">
          <h2>Арендовать по количеству гостей</h2>
          <Link to="/">10 человек</Link>
          <Link to="/">50 человек</Link>
          <Link to="/">100 человек</Link>
          <Link to="/">200 человек</Link>
          <Link to="/">500 человек</Link>
        </div>
      </div>
    </div>
  );
};

export default Grid;
