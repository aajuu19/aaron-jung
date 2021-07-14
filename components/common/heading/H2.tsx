import * as React from "react";

import styles from "./h2.module.scss";

type H2Props = {
  mainText: string;
};

export function H2(props: H2Props) {
  const { mainText } = props;

  return <h2 className={styles.root}>{mainText}</h2>;
}
