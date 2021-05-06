import React from 'react'
import { Link } from "react-router-dom";
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import Services from '../components/Services'

const Home = () => {
    return (
        <>
        <Hero>
            <Banner
            title="Welcome To Hotel Sultan" 
            subtitle="Best place to enjoy luxury"
            >
            <Link to="/rooms" className="btn-primary">Our Rooms</Link>
            </Banner>
        </Hero>
        <Services />
        </>
    )
}

export default Home
