import * as React from "react";

type NavigationProps = {
  className?: string;
};

export default function Navigation(props: NavigationProps) {
  const { className } = props;

  return <nav className={className}>Dies ist der Navigation</nav>;
}
