import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => {
    return (
        <>
        <section>
            <Link to="/pizza">
                <button id="goToOrderForm">Pizza?</button>
            </Link>
        </section>
        </>
    )
}

export default Home;