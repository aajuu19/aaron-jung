import * as React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import styles from "./navigation.module.scss";

type NavigationProps = {};

type LinkListTypes = {
  name: string;
  path: string;
}[];

const linkList: LinkListTypes = [
  {
    name: "Startseite",
    path: "/",
  },
  {
    name: "Über mich",
    path: "/about-me",
  },
  {
    name: "Lebenslauf",
    path: "/lebenslauf",
  },
  {
    name: "Referenzen",
    path: "/referenzen",
  },
  {
    name: "Kenntnisstand",
    path: "/kenntnisstand",
  },
  {
    name: "Projekte",
    path: "/projekte",
  },
  {
    name: "Kontakt",
    path: "/kontakt",
  },
];

export function Navigation(props: NavigationProps) {
  const router = useRouter();
  const [isNavigationActive, setIsNavigationActive] = React.useState(false);
  const navigationClasses = isNavigationActive ? `${styles.root} ${styles.menuIsActive}` : styles.root;

  function handleNavigationToggleClick() {
    setIsNavigationActive(!isNavigationActive);
  }

  return (
    <>
      <div className={navigationClasses}>
        <div className={styles.innerWrapper}>
          <nav>
            <ul className={styles.naviMain}>
              {linkList.map(({ path, name }) => {
                const isActiveClass = router.pathname === path ? styles.active : "";

                return (
                  <li key={path} className={isActiveClass} onClick={handleNavigationToggleClick}>
                    <Link href={path}>
                      <a>{name}</a>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
      <button className={styles.toggleNavigation} onClick={handleNavigationToggleClick}>
        <div>
          <span className={styles.middle}></span>
        </div>
      </button>
    </>
  );
}
