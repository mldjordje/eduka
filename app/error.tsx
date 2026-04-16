"use client";

import Link from "next/link";
import Layout from "@/components/layout/Layout";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="sr">
      <body>
        <Layout>
          <section className="pt-100 pb-70">
            <div className="container">
              <h1 className="title pb-16">Trenutno nije moguće otvoriti vest</h1>
              <p className="pb-24">
                Došlo je do privremenog problema pri učitavanju sadržaja. Pokušajte ponovo ili se vratite na listu vesti.
              </p>

              <div className="d-flex gap-3 flex-wrap">
                <button type="button" className="vl-btn-primary" onClick={() => reset()}>
                  Pokušaj ponovo
                </button>
                <Link className="vl-btn-primary" href="/vesti">
                  Sve vesti
                </Link>
              </div>

              {process.env.NODE_ENV !== "production" && (
                <pre className="pt-24" style={{ whiteSpace: "pre-wrap" }}>
                  {String(error?.message || error)}
                </pre>
              )}
            </div>
          </section>
        </Layout>
      </body>
    </html>
  );
}

