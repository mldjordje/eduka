"use client";

import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/layout/SectionHeader";
import type { ApplicationSubmission } from "@/types/application";
import type { BlogPost } from "@/types/blog";
import Link from "next/link";
import { ChangeEvent, FormEvent, useEffect, useMemo, useState } from "react";

const initialPostForm = {
  title: "",
  slug: "",
  author: "",
  image: "",
  excerpt: "",
  content: "",
  tags: "",
  date: "",
};

export default function CmsPage() {
  const [isAuthed, setIsAuthed] = useState<boolean>(false);
  const [loginUser, setLoginUser] = useState("");
  const [loginPass, setLoginPass] = useState("");
  const [loginError, setLoginError] = useState<string | null>(null);

  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [applications, setApplications] = useState<ApplicationSubmission[]>([]);
  const [form, setForm] = useState(initialPostForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const API_BASE = (process.env.NEXT_PUBLIC_API_BASE_URL || "").replace(/\/+$/,'');
  const UPLOAD_URL = process.env.NEXT_PUBLIC_UPLOAD_ENDPOINT || "";

  useEffect(() => {
    try {
      const flag = typeof window !== "undefined" ? localStorage.getItem("cmsAuth") : null;
      if (flag === "true") setIsAuthed(true);
    } catch {}

    if (!isAuthed) return;

    const postsUrl = API_BASE ? `${API_BASE}/posts.php` : "/api/posts";
    fetch(postsUrl)
      .then((res) => res.json())
      .then((data: BlogPost[]) => setPosts(data))
      .catch(() => setPosts([]));

    const appsUrl = API_BASE ? `${API_BASE}/applications.php` : "/api/applications";
    fetch(appsUrl)
      .then((res) => res.json())
      .then((data: ApplicationSubmission[]) => setApplications(data))
      .catch(() => setApplications([]));
  }, [isAuthed]);

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    setLoginError(null);
    const ok = loginUser === "eduka" && loginPass === "eduka";
    if (ok) {
      try {
        localStorage.setItem("cmsAuth", "true");
      } catch {}
      setIsAuthed(true);
    } else {
      setLoginError("Pogrešno korisničko ime ili lozinka.");
    }
  };

  const handleLogout = () => {
    try { localStorage.removeItem("cmsAuth"); } catch {}
    setIsAuthed(false);
    setPosts([]);
    setApplications([]);
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    setUploadError(null);
    setIsUploading(true);
    try {
      const data = new FormData();
      data.append("file", file);
      const endpoint = UPLOAD_URL || "/api/upload";
      const res = await fetch(endpoint, { method: "POST", body: data });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.message || "Upload nije uspeo.");
      }
      const body = await res.json();
      const url = body.url || body.path; // PHP vraća url, lokalni API vraća path
      setForm((prev) => ({ ...prev, image: url }));
    } catch (e: any) {
      setUploadError(e.message || "Greška pri uploadu.");
    } finally {
      setIsUploading(false);
    }
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);
    setMessage(null);
    setError(null);
    try {
      const endpoint = API_BASE ? `${API_BASE}/posts.php` : "/api/posts";
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, tags: form.tags }),
      });
      if (!response.ok) {
        const body = await response.json().catch(() => ({}));
        throw new Error(body.message || "Neuspešno čuvanje objave");
      }
      const createdPost: BlogPost = await response.json();
      setPosts((prev) => [createdPost, ...prev]);
      setForm({ ...initialPostForm });
      setMessage("Objava je uspešno sačuvana!");
    } catch (err: any) {
      setError(err.message || "Greška prilikom čuvanja objave");
    } finally {
      setIsSubmitting(false);
    }
  };

  const latestApplications = useMemo(() => applications.slice(0, 5), [applications]);

  const formatDate = (value: string) => {
    if (!value) return "-";
    const parsed = new Date(value);
    return Number.isNaN(parsed.getTime()) ? "-" : parsed.toLocaleDateString("sr-RS");
  };

  if (!isAuthed) {
    return (
      <Layout>
        <SectionHeader title="CMS" isGroup={false} linkGroup="" pageGroup="" current="Login" />
        <section className="pt-100 pb-70">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-6">
                <div className="vl-off-white-bg p-40 br-20">
                  <h3 className="title pb-20">Prijava na CMS</h3>
                  {loginError && <div className="alert alert-danger">{loginError}</div>}
                  <form onSubmit={handleLogin}>
                    <div className="pb-16">
                      <label className="form-label">Korisničko ime</label>
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
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <SectionHeader title="CMS" isGroup={false} linkGroup="" pageGroup="" current="CMS" />
      <section className="pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-12 d-flex justify-content-end pb-20">
              <button className="vl-btn-primary" onClick={handleLogout}>Odjava</button>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 mb-40">
              <div className="vl-off-white-bg p-40 br-20">
                <h3 className="title pb-20">Kreiranje nove blog objave</h3>
                <p className="pb-16">Otpremajte sliku direktno sa svog uređaja.</p>
                {message && <div className="alert alert-success">{message}</div>}
                {error && <div className="alert alert-danger">{error}</div>}
                {uploadError && <div className="alert alert-danger">{uploadError}</div>}
                <form onSubmit={handleSubmit} className="cms-form">
                  <div className="row">
                    <div className="col-12 pb-16">
                      <label className="form-label">Naslov *</label>
                      <input type="text" name="title" value={form.title} onChange={handleInputChange} required className="form-control" />
                    </div>
                    <div className="col-md-6 pb-16">
                      <label className="form-label">Slug</label>
                      <input type="text" name="slug" value={form.slug} onChange={handleInputChange} placeholder="automatski ako ostane prazno" className="form-control" />
                    </div>
                    <div className="col-md-6 pb-16">
                      <label className="form-label">Autor *</label>
                      <input type="text" name="author" value={form.author} onChange={handleInputChange} required className="form-control" />
                    </div>
                    <div className="col-md-6 pb-16">
                      <label className="form-label">Datum objave</label>
                      <input type="date" name="date" value={form.date} onChange={handleInputChange} className="form-control" />
                    </div>
                    <div className="col-md-6 pb-16">
                      <label className="form-label">Slika (upload)</label>
                      <input type="file" accept="image/*" className="form-control" onChange={handleImageUpload} disabled={isUploading} />
                      {isUploading && <small>Otpremanje...</small>}
                    </div>
                    <div className="col-12 pb-16">
                      <label className="form-label">Kratak opis</label>
                      <textarea name="excerpt" value={form.excerpt} onChange={handleInputChange} rows={3} className="form-control" />
                    </div>
                    <div className="col-12 pb-16">
                      <label className="form-label">Sadržaj *</label>
                      <textarea name="content" value={form.content} onChange={handleInputChange} rows={6} required className="form-control" />
                    </div>
                    <div className="col-12 pb-24">
                      <label className="form-label">Tagovi (odvojeni zarezom)</label>
                      <input type="text" name="tags" value={form.tags} onChange={handleInputChange} className="form-control" />
                    </div>
                    {form.image && (
                      <div className="col-12 pb-16">
                        <label className="form-label">Pregled slike</label>
                        <div className="vl-blog-thumb image-anime" style={{ maxWidth: 300 }}>
                          <img className="w-100" src={form.image.startsWith("http") ? form.image : `/${form.image.replace(/^\//, "")}`} alt="Pregled slike" />
                        </div>
                      </div>
                    )}
                    <div className="col-12">
                      <button type="submit" className="vl-btn-primary" disabled={isSubmitting}>{isSubmitting ? "Čuvanje..." : "Sačuvaj objavu"}</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-6 mb-40">
              <div className="vl-off-white-bg p-40 br-20 h-100">
                <h3 className="title pb-12">Poslednje objave</h3>
                <p className="pb-16">Sveže objave su prikazane redom kojim su objavljene.</p>
                <div className="cms-post-list">
                  {posts.length === 0 && <p>Još uvek nema objava.</p>}
                  {posts.map((post) => (
                    <div key={post.slug} className="cms-post-item">
                      <h4 className="cms-post-title">
                        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                      </h4>
                      <div className="cms-post-meta">
                        <span>{formatDate(post.date)}</span>
                        <span>{post.author}</span>
                      </div>
                      <p>{post.excerpt}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="vl-off-white-bg p-40 br-20">
                <h3 className="title pb-12">Nove prijave posetilaca</h3>
                <p className="pb-20">Prikaz poslednjih 5 prijava sa forme za posetioce.</p>
                {latestApplications.length === 0 && <p>Nema pristiglih prijava.</p>}
                {latestApplications.length > 0 && (
                  <div className="table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          <th>Ime i prezime</th>
                          <th>Email</th>
                          <th>Telefon</th>
                          <th>Željeni termin</th>
                          <th>Poruka</th>
                          <th>Poslato</th>
                        </tr>
                      </thead>
                      <tbody>
                        {latestApplications.map((application) => (
                          <tr key={application.id}>
                            <td>{application.name}</td>
                            <td>{application.email}</td>
                            <td>{application.phone}</td>
                            <td>{application.preferredDate ? new Date(application.preferredDate).toLocaleDateString("sr-RS") : "/"}</td>
                            <td>{application.message}</td>
                            <td>{new Date(application.createdAt).toLocaleString("sr-RS")}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
