import { languages, tools } from "../../../data";
import Bar from "../Components/Bar";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import styles from "../styles/resume.module.css"

const Page = () => {
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <Sidebar />
      </div>
      <div className={styles.mainContent}>
        <Navbar />
        <div className={styles.content}>
          {/* Education & Experience */}
          <div className={styles.educationExperience}>
            <div>
              <h5 className={styles.heading}>Education</h5>
              <div>
                <h5 className={styles.subHeading}>Computer Science Engineering</h5>
                <p className={styles.institution}>Academy of Technology (2017-2021)</p>
                <p className={styles.description}>
                  I am currently pursuing B.Tech in Computer Science Engineering from Academy of Technology.
                </p>
              </div>
            </div>
            <div>
              <h5 className={styles.heading}>Experience</h5>
              <div>
                <h5 className={styles.subHeading}>Software Developer Jr.</h5>
                <p className={styles.institution}>Sigma Security Services</p>
                <p className={styles.description}>
                  Love this job, great opportunity to earn early.
                </p>
              </div>
            </div>
          </div>

          {/* Languages & Tools */}
          <div className={styles.skills}>
            <div>
              <h5 className={styles.heading}>Language & Framework</h5>
              <div className={styles.barContainer}>
                {languages.map((language, i) => (
                  <Bar value={language} key={i} />
                ))}
              </div>
            </div>

            <div>
              <h5 className={styles.heading}>Tools & Softwares</h5>
              <div className={styles.barContainer}>
                {tools.map((tool, i) => (
                  <Bar value={tool} key={i} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
