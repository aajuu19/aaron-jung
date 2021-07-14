import * as React from "react";

import styles from "./container.module.scss";

type ContainerProps = {
  children: JSX.Element[];
};

export function Container(props: ContainerProps) {
  const { children } = props;

  return <div className={styles.root}>{children}</div>;
}
