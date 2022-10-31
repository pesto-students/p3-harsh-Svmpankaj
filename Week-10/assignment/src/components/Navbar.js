import React from 'react'
import "./Navbar.css"

export default function Navbar() {
    return (
        <>
            <nav>
                <div className="fcontainer">
                    <div className="fitem"><h1><b>Shortly</b></h1></div>
                    <div className="fitem">
                        <ul className="mid_nav mx-6">
                            <li className='mx-4'><a href="/">Features</a></li>
                            <li className='mx-4'><a href="/">Pricing</a></li>
                            <li className='mx-4'><a href="/">Resources</a></li>
                        </ul>
                    </div>
                    <div className="fitem">
                        <ul className="end_nav">
                            <li><a href="/">Login</a></li>
                            <li><a href="/">Sign Up</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
