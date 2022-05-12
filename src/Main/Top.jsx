import React from "react";
import { useSelector } from "react-redux";
import styles from "./Main.module.css";
import { FaPlay } from "react-icons/fa";
export default function Top() {
  const film = useSelector((store) => store.film);
  console.log(film);
  return (
    <div style={{ width: "100%" }}>
      <div className={styles.filmInform}>
        <p className={styles.category}>{film.Category}</p>
        <img src={film.TitleImage} alt="" style={{ width: "80%" }} />
        <div className={styles.filmDate}>
          <p>{film.ReleaseYear}</p>
          <p>{film.MpaRating}</p>
          <p>1h 48m</p>
        </div>
        <p className={styles.description}>{film.Description}</p>
        <div className={styles.filmBtns}>
          <a href="#" className={styles.playBtn}>
            <FaPlay className={styles.playIcon} />
            <p>Play</p>
          </a>
          <button className={styles.moreInfoBtn}>More Info</button>
        </div>
      </div>
      <img
        src={film.CoverImage}
        alt=""
        style={{ width: "100%", objectFit: "conatin" }}
      />
    </div>
  );
}
