import React from "react";
import { Fragment } from "react";
import mealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCardButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>My Food</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="here" />
      </div>
    </Fragment>
  );
};

export default Header;
