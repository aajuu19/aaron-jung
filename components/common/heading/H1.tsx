import * as React from "react";

import styles from "./h1.module.scss";

type H1Props = {
  mainText: string;
  secondaryText?: string;
};

export function H1(props: H1Props) {
  const { mainText, secondaryText } = props;

  return (
    <h1 className={styles.root}>
      {mainText}
      <span>{secondaryText}</span>
    </h1>
  );
}
