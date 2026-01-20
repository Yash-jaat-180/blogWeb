import React from 'react'
import blog from '../../public/blog.jpeg'

function Logo(width = '100px') {
  return (
    <div>
      <img src={blog} alt="Logo" />
    </div>
  )
}

export default Logo;
