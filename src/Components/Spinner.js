import React, { Component } from 'react'
import Loading from './Loading.gif'

const Spinner = () => {
    return (
        <div className='text-center'>
            <img className='my-3' src={Loading} alt="Loading News!" />
        </div>
    )
}

export default Spinner