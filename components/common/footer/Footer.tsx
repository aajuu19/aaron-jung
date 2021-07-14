import * as React from "react";

import styles from "./footer.module.scss";

export function Footer() {
  return (
    <footer className={styles.root}>
      <ul className="navi-add">
        <li>
          <a href="<?php echo SITE_ROOT ?>impressum.php" title="<?php echo $page['impressum.php']['title'];?>">
            Impressum
          </a>
        </li>
        <li>
          <a href="<?php echo SITE_ROOT ?>datenschutzerklaerung.php" title="<?php echo $page['datenschutzerklaerung.php']['title'];?>">
            Datenschutzerklärung
          </a>
        </li>
      </ul>
    </footer>
  );
}
