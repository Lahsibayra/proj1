import React from 'react'
import { Link } from 'react-router-dom'

function Switches() {
  return (
    <div>
      <div className='flex gap-3 '> 
        <div className='bg-red-200 p-2  border rounded-md'>
          <Link to="/">form</Link>
        </div>
        <div className='bg-green-200 p-2 border rounded-md'>
          <Link to="/Table">Table</Link>
        </div>
        
      </div>
    </div>
  )
}

export default Switches
