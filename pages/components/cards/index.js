import React from 'react'
import Card from '../card'
import styles from '../../../styles/Cards.module.css'

const cardsList = [
    {
        id: 1,
        image: "https://images.pexels.com/photos/1232459/pexels-photo-1232459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "Member Shop",
        desc: "Shop Member Exclusive Style",
        alt : 'shirt'
    },
    {
        id: 2,
        image: "https://images.pexels.com/photos/1232459/pexels-photo-1232459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "Member Shop",
        desc: "Shop Member Exclusive Style",
        alt : 'shoes'
    },
    {
        id: 3,
        image: "https://images.pexels.com/photos/1232459/pexels-photo-1232459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "Member Shop",
        desc: "Shop Member Exclusive Style",
        alt: 'hat'
    },
]

export default function Cards() {
  return (
    <ul className= {styles.container}>
        {cardsList.map((card) => {
            const {id, image,title, desc, alt} = card

            return (
                <li key = {id}> <Card image = {image} title = {title} description = {desc}
                 alt = {alt} /></li>
            )
        })}
    </ul>
  )
}
