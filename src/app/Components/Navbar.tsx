"use client";

import { FunctionComponent, useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../styles/navbar.module.css"; // Import custom CSS

const NavItem: FunctionComponent<{
  activeItem: string;
  setActiveItem: Function;
  name: string;
  route: string;
}> = ({ activeItem, name, route, setActiveItem }) => {
  return activeItem !== name ? (
    <Link href={route} className={styles.navLink}>
      <span onClick={() => setActiveItem(name)} className={styles.navItem}>
        {name}
      </span>
    </Link>
  ) : null;
};

const Navbar = () => {
  const [activeItem, setActiveItem] = useState<string>("");
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/") setActiveItem("About");
    else if (pathname === "/Projects") setActiveItem("Projects");
    else if (pathname === "/Resume") setActiveItem("Resume");
  }, [pathname]);

  return (
    <div className={styles.navbar}>
      <span className={styles.activeItem}>{activeItem}</span>
      <div className={styles.navLinks}>
        <NavItem
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          name="About"
          route="/"
        />
        <NavItem
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          name="Projects"
          route="/Projects"
        />
        <NavItem
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          name="Resume"
          route="/Resume"
        />
      </div>
    </div>
  );
};

export default Navbar;
