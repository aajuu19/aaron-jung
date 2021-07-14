import * as React from "react";

import styles from "./header.module.scss";

type HeaderProps = {
  imageName: string;
};

export function Header(props: HeaderProps) {
  const { imageName } = props;

  return (
    <header className={styles.header}>
      <div className={styles.animatedImage} style={{ backgroundImage: `url(./${imageName}.jpg)` }}></div>
    </header>
  );
}
