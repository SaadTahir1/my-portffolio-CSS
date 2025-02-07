"use client";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { GiTie } from "react-icons/gi";
import { GoLocation } from "react-icons/go";
import { FaFacebook } from "react-icons/fa";
import styles from "../styles/sidebar.module.css"; // Import custom CSS

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <img src="mypic.jpg" alt="avatar" className={styles.avatar} />
      <h3 className={styles.name}>
        <span className={styles.highlight}>Abdullah</span> Saad
      </h3>
      <p className={styles.role}>Web Developer</p>

      {/* Resume */}
      <a href="/assets/Saad Resume.pdf" download="Saad Resume.pdf" className={styles.resumeBtn}>
        <GiTie className={styles.icon} />
        <span>Download Resume</span>
      </a>

      {/* Socials */}
      <div className={styles.socials}>
        <a href="https://www.facebook.com/abdullah.saad.92505">
          <FaFacebook className={styles.socialIcon} />
        </a>
        <a href="https://www.linkedin.com/in/saad-a-0072a92bb/">
          <AiFillLinkedin className={styles.socialIcon} />
        </a>
        <a href="https://github.com/SaadTahir1">
          <AiFillGithub className={styles.socialIcon} />
        </a>
      </div>

      {/* Contacts */}
      <div className={styles.contact}>
        <div className={styles.contactItem}>
          <GoLocation className={styles.icon} /> <span>Karachi, Pakistan</span>
        </div>
        <p className={styles.email}>abdullahsaadjee23@gmail.com</p>
        <p className={styles.phone}>03462007259 / 03430210270</p>
      </div>

      {/* Email Button */}
      <button
        className={styles.emailBtn}
        onClick={() =>
          window.open(
            "https://mail.google.com/mail/u/0/#inbox?compose=XBcJlDLZchcgQHGhGRRFVRhHlTWwXmDJLPXslJhHvsklXJtNtpXjrmBNkKbHGdswjGwvzPHkNShhkJTG"
          )
        }
      >
        Email me
      </button>

      {/* Theme Toggle Button */}
      <button className={styles.talkBtn}>
        Let's have a talk
      </button>
    </div>
  );
};

export default Sidebar;
