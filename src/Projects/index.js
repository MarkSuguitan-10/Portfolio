import React from 'react'
import { Link } from 'react-router-dom';

const index = () => {
    console.log('Projects');
    return (
        <div>
            <h1>Projects</h1>
             <Link to='/Projects'></Link>
        </div>
    )
}

export default index
