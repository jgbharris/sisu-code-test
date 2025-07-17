"use client";
import React from "react";

import Image from "next/image";
import Link from "next/link";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div>
        <Link href="/">
          <Image
            src="/logo.png"
            height={40}
            width={100}
            alt="logo"
            className={styles.logo}
          />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
