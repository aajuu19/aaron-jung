import Head from "next/head";
import Image from "next/image";

import { Container, Header, Hero, H1, H2, Typography } from "./../components/common";

export default function AboutMe() {
  return (
    <>
      <Container>
        <H1 mainText="Aaron Jung" secondaryText="passionierter Frontend-Developer aus Berlin" />
        <Typography mBr>
          Auf den folgenden Seiten finden Sie einige Informationen über mich und meine bisherigen Arbeiten. Ich möchte Ihnen mit der Seite eine kleine Übersicht über mich als Person geben und Ihnen
          zeigen worin meine Stärken und meine Schwächen liegen. Im Folgenden werde ich detaillierter darauf eingehen, wieso ich mich für dieses Berufsfeld entschieden habe und welchen Weg ich auf dem
          Pfad meiner Karriere noch gehen möchte. Für Fragen, Anregungen oder Feedback stehe ich Ihnen jederzeit auf verschiedensten Kontaktwegen zur Verfügung.
        </Typography>
        <Typography mBr>
          Unter Berücksichtigung aktueller Webstandards habe ich diese Seite erstellt, damit Sie auch einen Einblick hinter die Kulissen (ins Backend) bekommen können. Die Website wurde mit PHP, Sass
          und PlainJS geschrieben. Natürlich wurden dabei alle HTML5 und CSS3 Konventionen berücksichtigt. Einen Download der Seite finden Sie hier um einen ersten Einblick in den Stil meiner
          Programmierung zu bekommen. Gängige Design Patterns habe ich für ein Projekt dieser (kleinen) Größe nicht genutzt. Bitte beachten Sie, dass diese Seite erst ab dem Internet Explorer 10 und
          unter Verwendung von Javascript voll funktionsfähig angezeigt wird.
        </Typography>
      </Container>

      <Hero heading="Meine Referenzen" description="Verschaffen Sie sich einen Überblick über alle meine bisherigen Projekte." buttonText="zu meinen Referenzen" buttonLink="/referenzen" />

      <Container>
        <H2 mainText="Worin liegt meine Hauptmotivation" />
        <Typography mBr>
          Auf den folgenden Seiten finden Sie einige Informationen über mich und meine bisherigen Arbeiten. Ich möchte Ihnen mit der Seite eine kleine Übersicht über mich als Person geben und Ihnen
          zeigen worin meine Stärken und meine Schwächen liegen. Im Folgenden werde ich detaillierter darauf eingehen, wieso ich mich für dieses Berufsfeld entschieden habe und welchen Weg ich auf dem
          Pfad meiner Karriere noch gehen möchte. Für Fragen, Anregungen oder Feedback stehe ich Ihnen jederzeit auf verschiedensten Kontaktwegen zur Verfügung.
        </Typography>
        <Typography mBr>
          Unter Berücksichtigung aktueller Webstandards habe ich diese Seite erstellt, damit Sie auch einen Einblick hinter die Kulissen (ins Backend) bekommen können. Die Website wurde mit PHP, Sass
          und PlainJS geschrieben. Natürlich wurden dabei alle HTML5 und CSS3 Konventionen berücksichtigt. Einen Download der Seite finden Sie hier um einen ersten Einblick in den Stil meiner
          Programmierung zu bekommen. Gängige Design Patterns habe ich für ein Projekt dieser (kleinen) Größe nicht genutzt. Bitte beachten Sie, dass diese Seite erst ab dem Internet Explorer 10 und
          unter Verwendung von Javascript voll funktionsfähig angezeigt wird.
        </Typography>
      </Container>
    </>
  );
}
