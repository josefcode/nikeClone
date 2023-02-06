import React from 'react'
import Link from 'next/link'

export default function Menu({title, link}) {
  return (
    <div>
         <Link  href = {link} target = '_blank'><h3>{title}</h3></Link>
    </div>
  )
}
