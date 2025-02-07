import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import { services } from "../../data";
import ServiceCard from "./Components/ServiceCard";
import styles from "./styles/page.module.css";  // Updated path

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <Sidebar />
      </div>
      <div className={styles.mainContent}>
        <Navbar />
        <div className={styles.intro}>
          <h5>
            Hello! I'm Abdullah. I am currently pursuing a B.Tech Degree (Final Year) in Computer
            Science Engineering from Academy of Technology. I have 3+ years of experience in Web Development and I'm still on my learning journey.
          </h5>
        </div>
        <div className={styles.servicesSection}>
          <h6 className={styles.servicesTitle}>What I offer</h6>
          <div className={styles.servicesGrid}>
            {services.map((service) => (
              <div className={styles.serviceCard} key={service.id}>
                <ServiceCard service={service} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
