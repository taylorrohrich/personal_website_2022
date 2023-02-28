import React from "react";
import styles from "./layout.module.css";
import Navbar from "./Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.layoutContainer}>
      <Navbar />
      <main className={styles.mainContainer}>{children}</main>
      <footer className={styles.footer}>
        <p>© Taylor Rohrich {new Date().getFullYear()}</p>
        <p> | </p>
        <p>taylorrohrich@gmail.com</p>
      </footer>
    </div>
  );
}
