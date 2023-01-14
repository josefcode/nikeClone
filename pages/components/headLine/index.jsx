import React from 'react'
import Image from 'next/image'
import styles from '../../../styles/HeadLine.module.css'


export default function HeadLine(){
    return (
        <section className= {styles.headContainer}>
            <div className= {styles.title}>
                <h1>Featured Footwear for Her</h1>
            </div>
           
                <div className= {styles.head_image}>
                <Image  className = {styles.imageOne} src = "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="woman sport" fill />
                </div>
                <div className = {styles.head_image_two}>
                <Image className = {styles.imageTwo} src = "https://images.unsplash.com/photo-1584863495140-a320b13a11a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3073&q=80" alt="woman sport2" fill />
                </div>
            
        </section>
    )
}