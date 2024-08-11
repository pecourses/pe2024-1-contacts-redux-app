import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import styles from './Header.module.css';

const calcClassName = ({ isActive }) =>
  classNames(styles.link, { [styles.activeLink]: isActive });

function Header () {
  return (
    <header>
      <nav>
        <ul className={styles.linksList}>
          <li>
            <NavLink className={calcClassName} to='/'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className={calcClassName} to='/contacts'>
              Contacts
            </NavLink>
          </li>
          <li>
            <NavLink className={calcClassName} to='/posts'>
              Posts
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
