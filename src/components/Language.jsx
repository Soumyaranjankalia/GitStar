import React from 'react'
import {Link} from 'react-router-dom'

export const Language = () => {
  return (
    <div>
        <Link to="/all">
        <button>All</button>
        </Link>
        <Link to="/html">
        <button >HTML</button> 
        </Link>
        <Link to="/css">
        <button>CSS</button>
        </Link>
        <Link to="javascripts">
        <button>JavaScripts</button>
        </Link>
    </div>
  )
}
