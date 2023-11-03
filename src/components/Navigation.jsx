import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
       <div className="Navigation">
        <ul>
          <NavLink to="/Home" className={( nav => (nav.isActive ? "nav-active" : ""))}>
            <li>Accueil</li>
          </NavLink>
          <NavLink to="/About" className={( nav => (nav.isActive ? "nav-active" : ""))}>
            <li>A Propos</li>
          </NavLink>
        </ul>
       </div>
    );
};

export default Navigation;