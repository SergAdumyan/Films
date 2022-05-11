import React from 'react'
import styles from './Menu.module.css'
export default function Menu() {
  return (
    <div className='menu'>
        <div className={styles.menuBlockIcons}>
            <a href='/'><img src='assets/icons/Search.png' alt=''/></a>
            <a href='/'><img src='assets/icons/Home.png' alt=''/></a>
            <a href='/'><img src='assets/icons/Play.png' alt=''/></a>
            <a href='/'><img src='assets/icons/Lenta.png' alt=''/></a>
            <a href='/'><img src='assets/icons/Maska.png' alt=''/></a>
            <a href='/'><img src='assets/icons/History.png' alt=''/></a>

        </div>
    </div>
  )
}
