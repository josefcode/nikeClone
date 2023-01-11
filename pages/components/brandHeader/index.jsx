import React from 'react'
import styles from '../../../styles/Brand.module.css'
import Image from 'next/image'


export function BrandHeader(){
    return(
        <div className= {styles.container}>
        <div className= {styles.wrapper}>
        <div >
            <ul className= {styles.list}>
                <li><Image src = 'https://img.icons8.com/glyph-neue/512/basketball.png' alt="ball" width={20} height={20}/></li>
                <li><Image src = 'https://img.icons8.com/glyph-neue/512/sport.png' alt="football" width={20} height = {20} /></li>
            </ul>
        </div>
        <div className= {styles.second_list}>
            <ul className= {styles.list}>
                <li>Find a Store <span>|</span></li>
                <li>Help <span>|</span></li>
                <li>Join Us <span>|</span></li>
                <li>Sign In</li>
            </ul>
        </div>
        </div>
        </div>
    
    )
}