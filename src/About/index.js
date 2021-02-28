import React from 'react'
import { Link } from 'react-router-dom';

const index = () => {
    console.log('About');
    return (
        <div>
            <h1>About</h1>
             <Link to='/'></Link>
        </div>
    )
}

export default index
