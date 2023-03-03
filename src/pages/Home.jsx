const styles = {
  container: {
    display: 'block',
    margin: "0 auto",
    width: 600, 
    textAlign:'right',
  },

  title: {
    width: 600,
    fontWeight: 700,
    fontSize: 31,
    textAlign: 'center',
    marginTop: '150px',
  },
  text: {
    fontSize: 20,
    fontWeight: 600,
    textAlign: 'center',
    lineHeight: 1.5,
    padding: '10px',
  },
};

const Home = () => {
    return (
      <div style={styles.container}>
        <h1 style={styles.title}>This is a PhoneBook service</h1>
        <p style={styles.text}>You can create your own account and get record and use contacts from anywhere.</p>
        {/* <img src="../../public/phone-book.png" alt="phone-book-img"/> */}
      </div>
    );
  };
  
export default Home;