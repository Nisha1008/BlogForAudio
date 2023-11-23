import React from 'react'

function Logo({ width = '100px' }) {
  return (
    <div className={width}>
      <span className='text-3xl italic font-semibold'>Blogger</span>
    </div>
  )
}

export default Logo