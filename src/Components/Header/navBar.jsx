import { Link } from "react-router-dom";
import { useLogout } from '../../CustomHooks/useLogout';
import { useAuthContext } from '../../CustomHooks/useAuthContext'

//styles
import './navBar.styles.css'

const NavBar = () => {

  const { logout } = useLogout();
  const { user } = useAuthContext();

  return (

    <nav className="navbar navbar-light bg-light">
      <Link to="/" className="navbar-brand margin">
        Excelsior College
      </Link>
      {user && (
        <div>
          <span className="navbar-text">Logged in as: {user.displayName}</span>
          <li className="btn margin" onClick={logout}>Log out</li>
        </div>
      )}
      {!user && (
        <div>
          <li className="btn shadow-none margin"><Link className="btn shadow-none" to='/signin'>Login</Link></li>
        </div>
      )}
    </nav>
  );
};

export default NavBar;