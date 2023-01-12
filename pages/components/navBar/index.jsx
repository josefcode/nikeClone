import React from 'react'
import styles from '../../../styles/NavBar.module.css'
import Image from 'next/image'


export function NavBar(){
    return(
        <div className= {styles.container}>
        <div className= {styles.wrapper}>
        <div >
            <ul className= {styles.list}>
                <li><Image src = 'https://img.icons8.com/glyph-neue/512/basketball.png' alt="ball" width={20} height={20}/></li>
            </ul>
        </div>
        <div className= {styles.second_list}>
            <ul className= {styles.list}>
                <li>New & Featured</li>
                <li>Men </li>
                <li>Women </li>
                <li>Kids</li>
                <li>Sale</li>
            </ul>
        
            <ul className= {styles.pre_search_contain}>
               
                <li className={styles.search}><input type="text" placeholder='Search' /><button className= {styles.search_icon}><Image src ="https://img.icons8.com/ios/512/search-more.png" width={20} height ={20}/></button>
                </li>
               {/* <div className= {styles.icon_navbar}> */}
                <li><button className= {styles.icons}><Image src="https://img.icons8.com/ios/512/hearts.png" width = {20} height = {20} /></button></li>
                <li><button className= {styles.icons}><Image src = "https://img.icons8.com/material-outlined/512/shopping-bag.png" width={20} height = {20} /></button></li>
                {/* </div> */}
            </ul>
        </div>
        </div>
        </div>
    
    )
}