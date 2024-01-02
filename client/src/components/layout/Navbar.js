import React from 'react';
import { Link } from 'react-scroll';

const Navbar = (props) => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
                <div className="container">
                    <a className="navbar-brand">🛞Portfolio</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-auto">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">
                                    <Link to='about' spy={true} smooth={true} duration={100}>
                                        About
                                    </Link>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">
                                    <Link to='skills' spy={true} smooth={true} duration={100}>
                                        Skills
                                    </Link>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">
                                    <Link to='experience' spy={true} smooth={true} duration={100}>
                                        Experience
                                    </Link>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">
                                    <Link to='project' spy={true} smooth={true} duration={100}>
                                        Project
                                    </Link>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">
                                    <Link to='education' spy={true} smooth={true} duration={100}>
                                        Education
                                    </Link>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">
                                    <Link to='contact' spy={true} smooth={true} duration={100}>
                                        Contact Me
                                    </Link>
                                </a>
                            </li>
                        </ul>
                        <a target='_blank' className="nav-link active ms-3" aria-current="page" href="https://github.com/samiralamgit"><button className='git-btn'>Github Profile</button></a>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;