import * as React from "react";
import Link from "next/link";

import styles from "./button.module.scss";

type ButtonProps = {
  buttonLink: string;
  buttonText: string;
  variant?: string;
};

export function Button(props: ButtonProps) {
  const { buttonLink = "/", buttonText, variant } = props;
  const classes = variant ? `${styles.root} ${styles[variant]}` : styles.root;

  return (
    <Link href={buttonLink}>
      <a className={classes} role="button">
        {buttonText}
      </a>
    </Link>
  );
}
