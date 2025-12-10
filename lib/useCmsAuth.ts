"use client";

import { useEffect, useState } from "react";

const CMS_KEY = "cmsAuth";
const USERNAME = "eduka";
const PASSWORD = "eduka";

export function useCmsAuth() {
  const [isAuthed, setIsAuthed] = useState(false);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(CMS_KEY);
      setIsAuthed(stored === "true");
    } catch {
      setIsAuthed(false);
    } finally {
      setChecking(false);
    }
  }, []);

  const login = (username: string, password: string) => {
    const ok = username === USERNAME && password === PASSWORD;
    if (ok) {
      try {
        localStorage.setItem(CMS_KEY, "true");
      } catch {}
      setIsAuthed(true);
    }
    return ok;
  };

  const logout = () => {
    try {
      localStorage.removeItem(CMS_KEY);
    } catch {}
    setIsAuthed(false);
  };

  return { isAuthed, checking, login, logout };
}

