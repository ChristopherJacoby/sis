import { Link } from "react-router-dom";
import { useLogout } from '../../CustomHooks/useLogout';
import { useAuthContext } from '../../CustomHooks/useAuthContext'

const NavBar = () => {

  const { logout } = useLogout();
  const { user } = useAuthContext();

  return (

    <nav className="navbar navbar-light bg-light">
      <Link to="/" className="navbar-brand">
        Excelsior College
          </Link>
      {user && (
        <div>
          <li>Hello {user.displayName}</li>
          <li className="btn" onClick={logout}>Log out</li>
        </div>
      )}
      {!user && (
        <div>
          <li><Link to='/signin'>Login</Link></li>
        </div>
      )}
    </nav>
  );
};

export default NavBar;