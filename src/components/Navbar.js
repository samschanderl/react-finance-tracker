import { Link } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext';

//styles
import styles from './Navbar.module.css'

export default function Navbar() {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  return (
    <nav className={styles.navbar}>
        <ul>
            <li className={styles.title}><Link to="/">Finance Tracker</Link></li>
            {/* show login and signup only when user is not logged in */}
            {!user && (
            <>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/signup">Signup</Link></li>
            </>
            )}
            {/* when logged in, show logout button */}
            {user && (
              <>
                <li>hello, {user.displayName}</li>
                <li>
                  <button className="btn btn--light" onClick={logout}>Logout</button>
                 </li>
              </>

            )}
        </ul>
    </nav>
  )
}
