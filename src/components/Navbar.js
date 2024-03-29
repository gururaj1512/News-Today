import React from 'react'

function Navbar(props) {

    return (
        <div>
            <nav className={`navbar fixed-top navbar-expand-lg bg-${props.mode } link-${props.mode === 'light'?'dark':'light'}`}>
                <div className={`container-fluid`}>
                    <a className={`navbar-brand link-${props.mode === 'light'?'dark':'light'}`} href="/">News Today</a>
                    <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className={`nav-link active link-${props.mode === 'light'?'dark':'light'}`} aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link active link-${props.mode === 'light'?'dark':'light'}`} href="/business">Business</a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link active link-${props.mode === 'light'?'dark':'light'}`} href="/entertainment">Entertainment</a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link active link-${props.mode === 'light'?'dark':'light'}`} href="/general">General</a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link active link-${props.mode === 'light'?'dark':'light'}`} href="/health">Health</a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link active link-${props.mode === 'light'?'dark':'light'}`} href="/science">Science</a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link active link-${props.mode === 'light'?'dark':'light'}`} href="/sports">Sports</a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link active link-${props.mode === 'light'?'dark':'light'}`} href="/technology">Technology</a>
                            </li>
                            {/* <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Dropdown
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </li> 
                                <li className="nav-item">
                                    <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                                </li> */}
                        </ul>
                        {/* <form className="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form> */}
                    </div>
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
                        <label className={`form-check-label`} htmlFor="flexSwitchCheckDefault">Dark Mode</label>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
