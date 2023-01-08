import styles from "components/parallax.module.css";
import NavBar from "../components/NavBar";
import NameAnimation from "../components/NameAnimation";

const Home = () => {
  return (
    <>
      <NavBar />
      <NameAnimation />
      <div className={styles.parallax}></div>
    </>
  );
};

export default Home;
