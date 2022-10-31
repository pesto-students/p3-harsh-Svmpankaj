import React from 'react'
import "./Footer.css"

export default function Footer() {
    return (
        <>
            <footer>
                <div className="fcontainer">
                    <div className="fitem1"><h1><b>Shortly</b></h1></div>
                    <div className="fitem2">
                        <ul className="mid_nav">
                            <li Style="padding: 1px 5px;"><a href="/">Features</a>
                                <ul className="first_mid">
                                    <li><a href="/">Link Shorting</a></li>
                                    <li><a href="/">Branded Links</a></li>
                                    <li><a href="/">Analytics</a></li>
                                    <li><a href="/">Analytics</a></li>
                                </ul>
                            </li>


                            <li Style="padding: 1px 5px;"><a href="/">Resources</a>
                                <ul className="center_mid">
                                    <li><a href="/">Blog</a></li>
                                    <li><a href="/">Developers</a></li>
                                    <li><a href="/">Support</a></li>
                                </ul>
                            </li>

                            <li Style="padding: 1px 5px;"><a href="/">Company</a>
                                <ul className="last_mid">
                                    <li><a href="/">About</a></li>
                                    <li><a href="/">Our Team</a></li>
                                    <li><a href="/">Careers</a></li>
                                    <li><a href="/">Contact</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="fitem3">
                        <ul className="end_nav">
                            <li><a href="/">Login</a></li>
                            <li><a href="/">Sign Up</a></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    )
}
