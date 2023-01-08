import styles from "components/parallax.module.css";
import NavBar from "../components/NavBar";

const Home = () => {
  return (
    <>
      <NavBar />
      <div className={styles.parallax}></div>
    </>
  );
};

export default Home;
