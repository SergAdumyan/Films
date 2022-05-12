import React, { useState } from "react";
import styles from "./Menu.module.css";
import { NavLink } from "react-router-dom";
export default function Menu() {
  const [bool, setBool] = useState(null);
  return (
    <>
      <div className={bool ? "forShadow" : "closeShadow"}></div>
      <div
        className="menu"
        onMouseOver={() => setBool(true)}
        onMouseLeave={() => setBool(false)}
      >
        <div className={styles.menuBlockIcons}>
          <NavLink to="/search">
            <img src="assets/icons/Search.png" alt="" />
            <p className={bool ? styles.titleIcons : styles.word}>Search</p>
          </NavLink>
          <NavLink to="/">
            <img src="assets/icons/Home.png" alt="" />
            <p className={bool ? styles.titleIcons : styles.word}>Home</p>
          </NavLink>
          <NavLink to="/play">
            <img src="assets/icons/Play.png" alt="" />
            <p className={bool ? styles.titleIcons : styles.word}>TV Shows</p>
          </NavLink>
          <NavLink to="/lenta">
            <img src="assets/icons/Lenta.png" alt="" />
            <p className={bool ? styles.titleIcons : styles.word}>Movies</p>
          </NavLink>
          <NavLink to="/maska">
            <img src="assets/icons/Maska.png" alt="" />
            <p className={bool ? styles.titleIcons : styles.word}>Genres</p>
          </NavLink>
          <NavLink to="/history">
            <img src="assets/icons/History.png" alt="" />
            <p className={bool ? styles.titleIcons : styles.word}>
              Watch Later
            </p>
          </NavLink>
        </div>
      </div>
    </>
  );
}
