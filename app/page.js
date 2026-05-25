export default function Home() {
  return (
    <main className="container">
      <div className="card">
        <div className="logo">▲</div>
        <h1>Next.js berjalan di FlazHost</h1>
        <p>Aplikasi Next.js Anda berhasil di-deploy dan berjalan.</p>
        <p className="hint">
          Edit <code>app/page.js</code> lalu push ke Git untuk memicu redeploy
          otomatis.
        </p>
        <div className="meta">
          Powered by FlazHost PaaS
        </div>
      </div>
    </main>
  );
}
