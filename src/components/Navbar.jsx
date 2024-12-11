import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          {import.meta.env.VITE_APP_NAME || 'React App'}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link " aria-current="page" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
            <NavLink className="nav-link " aria-current="page" to="/post">
                Post List
              </NavLink>
            </li>
            <li className="nav-item">
            <NavLink className="nav-link " aria-current="page" to="/posts">
                Posts
              </NavLink>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  );
}
