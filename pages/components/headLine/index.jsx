import React from 'react'
import Image from 'next/image'
import styles from '../../../styles/HeadLine.module.css'


export default function HeadLine(){
    return (
        <>
        <section className= {styles.headContainer}>
            <div className= {styles.title}>
                <h1>Featured Footwear for Her</h1>
            </div>
            <div className= {styles.cardContainer}>
               <div>
                <Image  id = 'image1'className = {styles.imageOne} src = "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="woman sport"  
                fill/>
        
                <div >
                <h3 className= {styles.bannerTitle} >Pegasus 39: <br/> In Peg We Trust</h3>
                <button className= {styles.btn}>Women's Running Footwear</button>
                </div>
                </div>
                <div>
                <Image id = "image2" className = {styles.imageTwo} src = "https://images.unsplash.com/photo-1584863495140-a320b13a11a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3073&q=80" alt="woman sport2" fill />
                
                <div className= {styles.cardChildTwo}>
                <h3 className= {styles.bannerTitle}>Built to Power <br/> Your Progress</h3>
                <button className= {styles.btn}>Women's Running Footwear</button>
                </div>
                </div>
                </div>
                
        </section>
         <section className= {styles.headContainer}>
         <div className= {styles.title}>
             <h1>Featured Footwear for Her</h1>
         </div>
        
            <div className= {styles.secondBanner}>
                <Image src = "https://images.unsplash.com/photo-1518002171953-a080ee817e1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" width = {1920} height = {300} alt = 'shoes' /> 
                <div className= {styles.secondBannerBtn}>
                <button className= {styles.btn}>Shop Drops</button>
                </div>
             </div>
        
     </section>
     <section className= {styles.headContainer}>
         <div className= {styles.title}>
             <h1>Featured Footwear for Her</h1>
         </div>
        
            <div className= {styles.secondBanner}>
                <Image src = "https://images.unsplash.com/photo-1518002171953-a080ee817e1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" width = {1920} height = {300} alt = 'shoes' /> 
                <div className= {styles.secondBannerBtn}>
                <button className= {styles.btn}>Shop Drops</button>
                </div>
             </div>
        
     </section>
     </>
    )
}