"use client";

import { DuckNav } from "@duckarchive/framework";
import { useEffect, useState } from "react";

export function NavigationBar() {
  const [siteUrl, setSiteUrl] = useState("");

  useEffect(() => {
    setSiteUrl(window.location.origin);
  }, []);

  if (!siteUrl) {
    return null;
  }

  return <DuckNav siteUrl={siteUrl} />;
}
