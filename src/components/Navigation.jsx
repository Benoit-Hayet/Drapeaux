import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
       <div className="Navigation">
        <ul>
          <NavLink to="/Home">
            <li>Accueil</li>
          </NavLink>
          <NavLink to="/About">
            <li>A Propos</li>
          </NavLink>
        </ul>
       </div>
    );
};

export default Navigation;