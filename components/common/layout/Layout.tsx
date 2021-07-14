import * as React from "react";
import { useRouter } from "next/router";

import { Footer, Header, Navigation } from "./../";
import styles from "./layout.module.scss";

export const LanguageContext = React.createContext("de");

export function Layout({ children }: any) {
  const router = useRouter();
  const [language, setLanguage] = React.useState("de");
  const routerPath = router.pathname;
  const headerImageName = routerPath === "/" ? "home" : routerPath.replace("/", "");

  function handleLanguageChange(event: React.ChangeEvent<HTMLSelectElement>) {
    setLanguage(event.target.value);
  }

  return (
    <LanguageContext.Provider value={language}>
      <select className="languageMenu" onChange={handleLanguageChange}>
        <option value="de">DE</option>
        <option value="en">EN</option>
      </select>
      <Navigation />
      <div className={styles.pageWrapper}>
        <Header imageName={headerImageName} />
        <main>{children}</main>
        <Footer />
      </div>
    </LanguageContext.Provider>
  );
}
