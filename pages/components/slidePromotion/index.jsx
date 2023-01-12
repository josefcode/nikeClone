import React from 'react'
import styles from '../../../styles/SlidPromotion.module.css'
import Image from 'next/image'


export function SlidePromotion(){
    return(
        <>
        <div className= {styles.container}>
        <h3>hello</h3>
        <p className={styles.small_text}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
        
        </div>
        <div>
            <Image src = "https://images.unsplash.com/photo-1579758629938-03607ccdbaba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" width = {1200} height = {600} />
        </div>
        </>
    )
}