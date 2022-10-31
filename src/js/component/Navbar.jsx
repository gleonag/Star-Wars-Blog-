import React from 'react'

const Navbar = () => {

const logoStarWars = "https://1000marken.net/wp-content/uploads/2021/01/Star-Wars-Logo.png"
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#"><img width="100px" src={logoStarWars}></img></a>
        <div className="col-2 justify-content-end">
                    <div className="btn-group">
                        <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="bi bi-nut"></i>
                          Favourites
                        </button>
                        <ul className="dropdown-menu">
                   
                        </ul>
                    </div>
          </div>
      </div>
    </nav>
  )
}

export default Navbar;