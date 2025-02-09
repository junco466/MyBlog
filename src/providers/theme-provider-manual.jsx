"use client";
import { useContext, useEffect, useState } from "react";
import { ThemeContextManual } from "@/context/ThemeContextManual";
import React from "react";
import { useTheme } from "next-themes";

const ThemeProvideManual = ({ children }) => {
  const { theme } = useContext(ThemeContextManual);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (mounted) {
    return (
      <div className={theme}>
        {children}
      </div>
    )
    
  }
};

export default ThemeProvideManual