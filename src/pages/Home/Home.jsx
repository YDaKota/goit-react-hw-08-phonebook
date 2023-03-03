import styles from './Home.module.css';

const Home = () => {
    return (
      <div className={styles.container}>
        <h1 className={styles.title}>This is a PhoneBook service</h1>
        <p className={styles.text}>You can create your own account and get record and use contacts from anywhere.</p>
      </div>
    );
  };
  
export default Home;