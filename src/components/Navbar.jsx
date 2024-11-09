import React from 'react'

const Navbar = ({ setCategory, setCountry }) => {

    const countryCodes = [
        'ae', 'ar', 'at', 'au', 'be', 'bg', 'br', 'ca', 'ch', 'cn', 'co', 'cu', 'cz', 'de', 'eg', 'fr', 'gb',
        'gr', 'hk', 'hu', 'id', 'ie', 'il', 'in', 'it', 'jp', 'kr', 'lt', 'lv', 'ma', 'mx', 'my', 'ng', 'nl',
        'no', 'nz', 'ph', 'pl', 'pt', 'ro', 'rs', 'ru', 'sa', 'se', 'sg', 'si', 'sk', 'th', 'tr', 'tw', 'ua',
        'us', 've', 'za'
    ];

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><span className='badge bg-light text-dark fs-4'>NewsMag</span></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <div className="nav-link" onClick={() => setCategory("technology")}>Technology</div>
                            </li>
                            <li className="nav-item">
                                <div className="nav-link" onClick={() => setCategory("business")}>Business</div>
                            </li>
                            <li className="nav-item">
                                <div className="nav-link" onClick={() => setCategory("health")}>Health</div>
                            </li>
                            <li className="nav-item">
                                <div className="nav-link" onClick={() => setCategory("sports")}>Sports</div>
                            </li>
                            <li className="nav-item">
                                <div className="nav-link" onClick={() => setCategory("entertainment")}>Entertainment</div>
                            </li>
                            <li className="nav-item">
                                <div className="nav-link" onClick={() => setCategory("science")}>Science</div>
                            </li>
                            <li className="nav-item">
                                <div className="dropdown">
                                    <a className="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Country</a>
                                    <ul className="dropdown-menu">
                                        {countryCodes.map((code) => (
                                            <li key={code}>
                                                <a className="dropdown-item" href="#" onClick={() => setCountry(code)}>
                                                    {code}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar