"use client";
import { ThemeProvider } from "next-themes";
import { ReactNode, useEffect, useState } from "react";

type Props = {
  children: ReactNode;
};

const Providers = ({ children }: Props) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default Providers;
