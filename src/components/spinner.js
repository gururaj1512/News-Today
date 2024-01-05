import React from 'react'
import Loading from './Loading.gif'

const spinner = () => {
    return (
      <div className='text-center'>
        <img src={Loading} alt="loading" style={{marginTop: '10vh',}}/>
      </div>
    )
}

export default spinner
