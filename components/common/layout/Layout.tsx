import * as React from "react";

import Navigation from "../navigation/Navigation";
import Footer from "../footer/Footer";

import styles from "./layout.module.scss";

export default function Layout({ children }: any) {
  return (
    <>
      <Navigation className={styles.navigation} />
      <div className={styles.pageWrapper}>
        {children}
        <Footer />
      </div>
    </>
  );
}
