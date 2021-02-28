import React from 'react'
import { Link } from 'react-router-dom';

const index = () => {
    console.log('Resume');
    return (
        <div>
            <h1>Resume</h1>
             <Link to='/Resume'></Link>
        </div>
    )
}

export default index
