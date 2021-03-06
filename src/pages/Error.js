import React from 'react'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import Banner from '../components/Banner'

const Error = () => {
    return <> 
    <Hero>
        <Banner title="404" subtitle="Page Not Found">
            <Link to="/home" className="btn-primary">Return to Home</Link>

        </Banner>
    </Hero>
    </>
        
}

export default Error
