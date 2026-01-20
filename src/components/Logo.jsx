import React from 'react'
import blog from '../../public/blog.jpeg'

function Logo(width = '100px') {
  return (
    <div>
      <img
        src={blog}
        alt="Logo"
        style={{ width: "120px", height: "120px" }}
      />
    </div>
  )
}

export default Logo;
