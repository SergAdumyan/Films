import React from 'react'
import ChooseFilm from './ChooseFilm'
import Top from './Top'

export default function Main() {
  return (
    <>
    <div style={{width:'100%',height:'100%'}}>
      <div style={{width:'92%',position:'absolute',right:0}}>
      <Top/>
      <ChooseFilm/>
    </div>
    </div>
    
    </>
    
  )
}
