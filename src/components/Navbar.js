import { Link } from 'react-router-dom'
export default function Navbar() {
    return (
      <div className="nav">
          <div className="site-title"></div>
          <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/team">Team</Link></li>
              <li><Link to="/about">About</Link></li>
          </ul>
      </div>
    )
}