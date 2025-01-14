import { useContext } from "react";
import styles from "./Header.module.scss";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../context";

function Header() {
  const { user } = useContext(AuthContext);
  console.log(user);
  
  return (
    <header className={`${styles.header} d-flex flex-row align-items-center`}>
      <div className="flex-fill">
        <NavLink to="/">
          <strong>JWT</strong>
        </NavLink>
      </div>
      {user.message !== "Non autorisé." ? (
        <ul className={styles.headerList}>
          <li>
            <NavLink to="profile" className="mr-15">
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink to="sinout" className="mr-15">
              Deconnexion
            </NavLink>
          </li>
        </ul>
      ) : (
        <ul className={styles.headerList}>
          <li>
            <NavLink to="signin" className="mr-15">
              Connexion
            </NavLink>
          </li>
          <li>
            <NavLink to="signup" className="mr-15">
              Inscription
            </NavLink>
          </li>
        </ul>
      )}
    </header>
  );
}

export default Header;
