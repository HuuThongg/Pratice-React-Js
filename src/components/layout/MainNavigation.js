import classes from './MainNavigation.module.css'
import { NavLink } from 'react-router-dom'
export default function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Greate quotes</div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to="/quotes" activeClassName={classes.active}>
              All Quotes
            </NavLink>
          </li>
          <li>
            <NavLink to="/new-quote" activeClassName={classes.active}>
              Add a quote
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};