import React from 'react'
import Image from 'next/image'
import styles from '../../../styles/Cards.module.css'

export default function Card({image, title, description, alt}) {
  return (
    <>
    <div className= {styles.cardContainer}>
        <Image className= {styles.cardImage} src = {image} alt = {alt} fill />
     
    </div>
       <div>
       <h2>{title}</h2>
       <p>{description}</p>
   </div>
   </>
  )
}
