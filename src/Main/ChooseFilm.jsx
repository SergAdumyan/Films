import React from 'react'
import data from '../data.json'
import { useDispatch } from 'react-redux'
import styles from './Main.module.css'
export default function ChooseFilm() {
    const arr = Object.values(data)
    console.log(arr);
    const dispatch = useDispatch()

  return (
    <div style={{display:'flex',gap:'15px',}} className={styles.diver}>

        {arr[1].map((elem)=>(
            
            <div key={elem.Id} onClick={()=>dispatch({
              type:'choose',
              payload:elem
            })}>
                <img src={elem.CoverImage} alt=""/>
            </div>
            
        ))}
    </div>
  )
}
