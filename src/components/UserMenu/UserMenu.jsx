import { useDispatch, useSelector } from 'react-redux';
import { selectUserName } from 'redux/auth/selectors';
import { logOut } from '../../redux/auth/operation';
import styles from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUserName);
  

  return (
    <div className={styles.wrapper}>
      <p className={styles.username}>Welcome, {user}</p>
      <button
        className={styles.btn}
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Log Out
      </button>
    </div>
  );
};