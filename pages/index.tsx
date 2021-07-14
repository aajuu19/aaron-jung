import * as React from "react";
import Head from "next/head";
import Image from "next/image";

import { Container, Header, Hero, H1, H2, LanguageContext, Typography } from "./../components/common";
import t from "./../translations/index";

export default function Home() {
  const lang = React.useContext<string>(LanguageContext) as "de" | "en";

  return (
    <>
      <Container>
        <H1 mainText="Aaron Jung" secondaryText="passionierter Frontend-Developer aus Berlin" />
        <Typography mBr>{t.introTextFirst[lang]}</Typography>
        <Typography mBr>{t.introTextSecond[lang]}</Typography>
      </Container>

      <Hero heading="Meine Referenzen" description="Verschaffen Sie sich einen Überblick über alle meine bisherigen Projekte." buttonText="zu meinen Referenzen" buttonLink="/referenzen" />

      <Container>
        <H2 mainText="Worin liegt meine Hauptmotivation" />
        <Typography mBr>{t.motivationTextFirst[lang]}</Typography>
        <Typography mBr>{t.motivationTextSecond[lang]}</Typography>
      </Container>
    </>
  );
}
