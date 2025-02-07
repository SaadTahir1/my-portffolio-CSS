import Navbar from "../Components/Navbar";
import Projects from "../Components/Projects";
import Sidebar from "../Components/Sidebar";
import styles from "../styles/projects.module.css";  // Import custom CSS

const Page = () => {
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <Sidebar />
      </div>
      <div className={styles.mainContent}>
        <Navbar />
        <Projects />
      </div>
    </div>
  );
};

export default Page;
