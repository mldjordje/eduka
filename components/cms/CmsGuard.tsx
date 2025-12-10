"use client";

import { FormEvent, ReactNode, useState } from "react";
import { useCmsAuth } from "@/lib/useCmsAuth";

interface CmsGuardProps {
  children: (ctx: { logout: () => void }) => ReactNode;
}

export default function CmsGuard({ children }: CmsGuardProps) {
  const { isAuthed, checking, login, logout } = useCmsAuth();
  const [loginUser, setLoginUser] = useState("");
  const [loginPass, setLoginPass] = useState("");
  const [loginError, setLoginError] = useState<string | null>(null);

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    setLoginError(null);
    const ok = login(loginUser, loginPass);
    if (!ok) {
      setLoginError("Pogre­no korisniŽ?ko ime ili lozinka.");
    }
  };

  if (checking) {
    return <p className="pb-16">Provera pristupa...</p>;
  }

  if (!isAuthed) {
    return (
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="vl-off-white-bg p-40 br-20">
            <h3 className="title pb-20">Prijava na CMS</h3>
            {loginError && <div className="alert alert-danger">{loginError}</div>}
            <form onSubmit={handleLogin}>
              <div className="pb-16">
                <label className="form-label">KorisniŽ?ko ime</label>
                <input className="form-control" value={loginUser} onChange={(e) => setLoginUser(e.target.value)} />
              </div>
              <div className="pb-24">
                <label className="form-label">Lozinka</label>
                <input type="password" className="form-control" value={loginPass} onChange={(e) => setLoginPass(e.target.value)} />
              </div>
              <button type="submit" className="vl-btn-primary">Prijavi se</button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return <>{children({ logout })}</>;
}

