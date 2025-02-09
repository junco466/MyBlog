"use client";
import { useContext, useEffect, useState } from "react";
import { ThemeContextManual } from "@/context/ThemeContextManual";
import React from "react";

export default ThemeProvideManual = ({ children }) => {
  const { theme } = useContext(ThemeContextManual);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (mounted) {
    return <div className={theme}>{children}</div>;
  }
};
