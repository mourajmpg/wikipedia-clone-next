export default function Home() {
  return (
    <div className="main-container">

      <header className="page-header">
        <img
          className="main-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/8/80/Wikipedia-logo-v2.svg"
          alt="Logotipo da Wikipédia"
        />
        <p className="subtitle">A Enciclopédia Livre</p>
      </header>

      <section className="language-grid">
        <a className="language-item"><span>English</span><small>6,800,000+ articles</small></a>
        <a className="language-item"><span>日本語</span><small>1,470,000+ 記事</small></a>
        <a className="language-item"><span>Русский</span><small>2,860,000+ статей</small></a>
        <a className="language-item"><span>Deutsch</span><small>3,050,000+ Artikel</small></a>
        <a className="language-item"><span>Français</span><small>2,712,000+ articles</small></a>
        <a className="language-item"><span>Español</span><small>2,000,000+ artículos</small></a>
        <a className="language-item"><span>中文</span><small>1,820,000+ 条目</small></a>
        <a className="language-item"><span>Italiano</span><small>1,830,000+ voci</small></a>
        <a className="language-item"><span>Polski</span><small>1,670,000+ haseł</small></a>
        <a className="language-item"><span>Português</span><small>1,156,000+ artigos</small></a>
      </section>

      <section className="search-section">
        <form className="search-form">
          <input type="search" placeholder="Buscar na Wikipédia" />
          <button type="submit">🔍</button>
        </form>
      </section>

      <footer className="bottom-banner">
        <p>
          <strong>A internet que nos foi prometida.</strong> Após quase 25 anos,
          a Wikipédia ainda é a mesma internet que nos foi prometida.
        </p>
      </footer>

    </div>
  );
}
