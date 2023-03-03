import { NavLink } from "react-router-dom";
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { selectIsLoggedIn } from "redux/auth/selectors";
import { useSelector } from "react-redux";
import styles from './AppBar.module.css';


export const AppBar = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <nav>
                    <NavLink className={styles.link} to="/">
                    Home
                    </NavLink>
                    {isLoggedIn && (
                    <NavLink className={styles.link} to="/contacts">
                    Contacts
                    </NavLink>
                    )}
                </nav>
                {isLoggedIn ? 
                <UserMenu /> : <AuthNav />}
            </header>
        </div>
        
    )
}