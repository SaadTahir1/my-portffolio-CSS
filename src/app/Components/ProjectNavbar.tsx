import { FunctionComponent } from "react";
import styles from "../styles/projectNavbar.module.css"; // Import custom CSS

const ProjectNavbar: FunctionComponent<{
  handleFilterCategory: (category: string) => void;
  active: string;
}> = ({ handleFilterCategory, active }) => {
  return (
    <div className={styles.navbar}>
      <button
        className={`${styles.navItem} ${active === "all" ? styles.active : ""}`}
        onClick={() => handleFilterCategory("all")}
      >
        All
      </button>
      <button
        className={`${styles.navItem} ${active === "react" ? styles.active : ""}`}
        onClick={() => handleFilterCategory("react")}
      >
        React
      </button>
      <button
        className={`${styles.navItem} ${active === "nextjs" ? styles.active : ""}`}
        onClick={() => handleFilterCategory("nextjs")}
      >
        Next.js
      </button>
      <button
        className={`${styles.navItem} ${active === "node" ? styles.active : ""}`}
        onClick={() => handleFilterCategory("node")}
      >
        Node
      </button>
      <button
        className={`${styles.navItem} ${active === "django" ? styles.active : ""}`}
        onClick={() => handleFilterCategory("django")}
      >
        Django
      </button>
    </div>
  );
};

export default ProjectNavbar;
