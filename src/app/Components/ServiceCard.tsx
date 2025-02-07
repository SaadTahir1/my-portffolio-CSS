import { FunctionComponent } from "react";
import { iService } from "../../../type";
import styles from "../styles/serviceCard.module.css"; // Import custom CSS

const ServiceCard: FunctionComponent<{ service: iService }> = ({ service }) => {
  const { Icon, title, about } = service;

  const createMarkup = () => {
    return { __html: about };
  };

  return (
    <div className={styles.serviceCard}>
      <Icon className={styles.icon} />
      <div>
        <h4 className={styles.title}>{title}</h4>
        <p dangerouslySetInnerHTML={createMarkup()}></p>
      </div>
    </div>
  );
};

export default ServiceCard;
