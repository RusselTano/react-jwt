import styles from "./Header.module.scss";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";

function Header() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout(); // Appelle la fonction logout du contexte
    navigate("/login"); // Redirige vers la page de connexion
  };
  
  return (
    <header className={`${styles.header} d-flex flex-row align-items-center`}>
      <div className="flex-fill">
        <NavLink to="/">
          <strong>JWT</strong>
        </NavLink>
      </div>
      {user ? (
        <ul className={styles.headerList}>
          <li>
            <NavLink to="profile" className="mr-15">
              Profile
            </NavLink>
          </li>
          <li>
          <button onClick={handleLogout}>Déconnexion</button>
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
