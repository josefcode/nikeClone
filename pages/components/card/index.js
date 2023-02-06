import React from 'react'
import Image from 'next/image'

export default function Card({image, title, description, alt}) {
  return (
    <div>
        <Image  src = {image} alt = {alt} width = {350} height = {350} />
        <div>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    </div>
  )
}
