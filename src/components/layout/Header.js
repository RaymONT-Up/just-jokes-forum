import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul>
          <li>
            <NavLink activeClassName={styles["active-link"]} to="/add-joke">
              Add a joke
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={styles["active-link"]} to="/jokes">
              Jokes
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
