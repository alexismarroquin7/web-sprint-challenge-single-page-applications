import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <>
        <section>
            <Link to="/pizza">
                <button>Pizza?</button>
            </Link>
        </section>
        </>
    )
}

export default Header;