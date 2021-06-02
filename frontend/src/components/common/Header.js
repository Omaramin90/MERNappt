import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import CreateapptsCreate from "../createappts/views/create"


const Header = () =>{

    return(
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">

            <a className="navbar-brand" href="#">Logo</a>

            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" href="/Home">Book Appointment</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/View">Appointment Schedule</a>
                </li>
            </ul>
        </nav>
    )
}

export default Header