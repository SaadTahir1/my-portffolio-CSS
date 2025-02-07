import { FunctionComponent } from "react";
import { Skill } from "../../../type";
import styles from "../styles/bar.module.css"; // Import custom CSS

const Bar: FunctionComponent<{ value: Skill }> = ({ value: { Icon, level, name } }) => {
  const bar_width = `${level}%`;

  return (
    <div className={styles.barContainer}>
      <div className={styles.bar} style={{ width: bar_width }}>
        <Icon className={styles.icon} /> {name}
      </div>
    </div>
  );
};

export default Bar;
