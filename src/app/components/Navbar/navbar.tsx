import Image from "next/image";
import Link from "next/link";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles["navbar-left"]}>
        <Link href="/">
          <Image
            src="/logo.png"
            height={40}
            width={100}
            alt="Dummy Image"
            className={styles.logo}
          />
        </Link>
      </div>
      <div className={styles["navbar-center"]}>
        <ul className={styles["nav-links"]}>
          <li>{/* <Link href="/gatesinfo">PLACEHOLDER</Link> */}</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
