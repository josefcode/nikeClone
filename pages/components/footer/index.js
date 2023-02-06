import React from 'react'
import Menu from '../menu'
import Image from 'next/image'
import styles from '../../../styles/Footer.module.css'

const footerData = {
    firstMenu: [
    {
        id: 1,
        title: 'PROMOTIONS',
        link : 'https://www.google.com/'
    },
    {
        id: 2,
        title: 'FIND A STORE',
        link : 'https://www.google.com/'
    },
    {
        id: 3,
        title: 'SIGN UP FOR EMAIL',
        link : 'https://www.google.com/'
    },
    {
        id: 4,
        title: 'BECOME A MEMBER',
        link : 'https://www.google.com/'
    },
    {
        id: 5,
        title: 'NIKE JOURNAL',
        link : 'https://www.google.com/'
    },
    {
        id: 6,
        title: 'SEND US FEEDBACK',
        link : 'https://www.google.com/'
    },
],
secondeMenu: [

    {
        id: 1,
        title: 'Contact Us',
        link : 'https://www.google.com/'
    },
    {
        id: 2,
        title: 'Order Status',
        link : 'https://www.google.com/'
    },
    {
        id: 3,
        title: 'Shipping and Delivery',
        link : 'https://www.google.com/'
    },
    {
        id: 4,
        title: 'Returns',
        link : 'https://www.google.com/'
    },
    {
        id: 5,
        title: ' Payment Options',
        link : 'https://www.google.com/'
    },
    {
        id: 6,
        title: 'Gift Card Balance',
        link : 'https://www.google.com/'
    },
],
thirdMenu : [

    {
        id: 1,
        title: 'News',
        link : 'https://www.google.com/'
    },
    {
        id: 2,
        title: 'Careers',
        link : 'https://www.google.com/'
    },
    {
        id: 3,
        title: 'Investors',
        link : 'https://www.google.com/'
    },
    {
        id: 4,
        title: 'Purpose',
        link : 'https://www.google.com/'
    },
    {
        id: 5,
        title: ' Sustainability',
        link : 'https://www.google.com/'
    },

], 
socialMendiaIcons: [
    {
        id:1,
        icon: 'https://cdn-icons-png.flaticon.com/512/1384/1384005.png',
        alt: 'facebook'
    },
    {
        id:2,
        icon: 'https://cdn-icons-png.flaticon.com/512/2168/2168336.png',
        alt: 'twitter'
    },
    {
        id:3,
        icon: 'https://cdn-icons-png.flaticon.com/512/1384/1384015.png',
        alt: 'instagram'
    },
    {
        id:4,
        icon: 'https://cdn-icons-png.flaticon.com/512/1384/1384012.png',
        alt: 'youtube'
    }

],
 
}


export default function Footer(){
  return (
    <div className= {styles.container}>
        <div className= {styles.firstContainer}>
            <div id = "item01">
                <p className= {styles.headerTitle}>GIFT CARDS</p>
                <ul className= {styles.firstMenu}>
                  {footerData.firstMenu.map((menu) => {
                    const {id, title, link} = menu

                    return (
                        <li key = {id}><Menu title = {title} link = {link} /></li>
                    )
                  })}
                </ul>
            </div>
            <div id = "item02">
                <p className= {styles.headerTitle}>GET HELP</p>
                <ul className= {styles.secondThirdMenu}>
                  {footerData.secondeMenu.map((menu) => {
                    const {id, title, link} = menu

                    return (
                        <li key = {id}><Menu title = {title} link = {link} /></li>
                    )
                  })}
                </ul>
            </div>
            <div id = "item03">
                <p className= {styles.headerTitle}>ABOUT NIKE</p>
                <ul className= {styles.secondThirdMenu}>
                  {footerData.thirdMenu.map((menu) => {
                    const {id, title, link} = menu

                    return (
                        <li key = {id}><Menu title = {title} link = {link} /></li>
                    )
                  })}
                </ul>
            </div>
            <div id = "item04" >
                <ul className= {styles.socialIcons} >
                {footerData.socialMendiaIcons.map((menu) => {
                    const {id, icon, alt} = menu

                    return (
                        <li key = {id}><span><Image src = {icon} alt = {alt} width = {40} height={40}/></span></li>
                    )
                  })}
                </ul>
            </div>
        </div>
        <div className= {styles.footerBottomMenu}>
            <div>
            <ul className= {styles.listStyle}>
                <li><Image src = "https://cdn-icons-png.flaticon.com/512/5616/5616461.png" alt="lacationIcon" width={20} height={20}/> 
                </li>
                <li>United States</li>
                <li>© 2023 Nike, Inc. All Rights Reserved</li>
            </ul>
            </div>
            <div>
                <ul className= {styles.navbarBottom}>
                    <li>Guides</li>
                    <li> Terms of Use</li>
                    <li>Nike Privacy Policy</li>
                    <li>CA Supply Chains Act</li>
                    <li>Terms of Sale</li>
                </ul>
            </div>
        </div>
    </div>
  )
}
