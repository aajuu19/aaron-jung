import * as React from "react";

import styles from "./typography.module.scss";

type TypographyProps = {
  children: string;
  mBr?: boolean; // medium break
};

export function Typography(props: TypographyProps) {
  const { mBr, children } = props;
  const classes = mBr ? `${styles.root} ${styles.mBr}` : styles.root;

  return <p className={classes}>{children}</p>;
}
