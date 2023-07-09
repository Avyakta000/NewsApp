import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {


    return (
        <>

            <nav className="navbar fixed-top navbar-dark navbar-expand-lg  bg-dark">
                <div className="container text-center bg-dark ">
                    <Link className="navbar-brand mr-5" to="/">NewsWorld</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav  me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-Link" style={{ color: '#FFF', margin: ".6rem" }} aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-Link" style={{ color: '#FFF', margin: ".6rem" }} to="/business">Business</Link>

                            </li>
                            <li className="nav-item">
                                <Link className="nav-Link" style={{ color: '#FFF', margin: ".6rem" }} to="/entertainment">Entertainment</Link>

                            </li>

                            <li className="nav-item">
                                <Link className="nav-Link" style={{ color: '#FFF', margin: ".6rem" }} to="/health">Health</Link>

                            </li>
                            <li className="nav-item">
                                <Link className="nav-Link" style={{ color: '#FFF', margin: ".6rem" }} to="/science">Science</Link>

                            </li>
                            <li className="nav-item">
                                <Link className="nav-Link" style={{ color: '#FFF', margin: ".6rem" }} to="/sports">Sports</Link>

                            </li>
                            <li className="nav-item">
                                <Link className="nav-Link" style={{ color: '#FFF', margin: ".6rem" }} to="/technology">Technology</Link>

                            </li>


                        </ul>
                        <form className="form-inline ml-5 my-2 my-lg-0">
                            <input name="search" className="form-control mr-sm-2" type="search" placeholder="Search" />
                            <button className="btn btn-outline-warning my-2 my-sm-0" type="submit">Search</button>
                        </form>


                    </div>
                </div>
            </nav>

        </>
    )
}


export default Navbar
