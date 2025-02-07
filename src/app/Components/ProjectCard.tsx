import { FunctionComponent, useState } from "react";
import { AiFillGithub, AiFillProject } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { IProject } from "../../../type";
import Image from "next/image";
import styles from "../styles/projectCard.module.css"; // Import custom CSS

const ProjectCard: FunctionComponent<{ project: IProject }> = ({
  project: { name, image_path, deployed_url, description, github_url, key_techs },
}) => {
  const [showDetail, setShowDetail] = useState(false);

  return (
    <div>
      <Image
        src={image_path}
        alt={name}
        className={styles.image}
        onClick={() => setShowDetail(true)}
        layout="responsive"
        height="150"
        width="300"
      />
      <p className={styles.projectName}>{name}</p>

      {showDetail && (
        <div className={styles.detailContainer}>
          <div>
            <Image src={image_path} alt={name} layout="responsive" height="150" width="300" />
            <div className={styles.buttonContainer}>
              <a href={github_url} className={styles.button}>
                <AiFillGithub /> <span>Github</span>
              </a>
              <a href={deployed_url} className={styles.button}>
                <AiFillProject /> <span>Project</span>
              </a>
            </div>
          </div>

          <div>
            <h2 className={styles.title}>{name}</h2>
            <h3 className={styles.description}>{description}</h3>

            <div className={styles.techContainer}>
              {key_techs.map((tech) => (
                <span key={tech} className={styles.techBadge}>
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <button onClick={() => setShowDetail(false)} className={styles.closeButton}>
            <MdClose size={30} />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
