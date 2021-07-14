import * as React from "react";

import { Button } from "./../";
import styles from "./hero.module.scss";

type HeroProps = {
  heading: string;
  description: string;
  buttonText: string;
  buttonLink: string;
};

export function Hero(props: HeroProps) {
  const { heading, description, buttonText, buttonLink } = props;

  return (
    <div className={styles.root}>
      <div className={styles.innerWrapper}>
        <span className={styles.heading}>{heading}</span>
        <span className={styles.description}>{description}</span>
        <Button buttonLink={buttonLink} buttonText={buttonText} variant="outline" />
      </div>
    </div>
  );
}
