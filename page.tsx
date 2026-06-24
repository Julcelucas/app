import ResumeBuilder from '../components/ResumeBuilder';
import UploadAnalyzer from '../components/UploadAnalyzer';

export default function Home() {
  return (
    <main className="page-shell">
      <header className="app-header">
        <div>
          <p className="eyebrow">Construa seu currículo</p>
          <h1>Editor de currículo profissional</h1>
          <p className="hero-description">
            Preencha seções claras e salve um currículo limpo, moderno e pronto para exportar.
          </p>
        </div>
        <div className="header-actions">
          <button className="button-secondary">Salvar rascunho</button>
          <button className="button-primary">Exportar PDF</button>
        </div>
      </header>

      <section className="editor-grid">
        <ResumeBuilder />
        <UploadAnalyzer />
      </section>
    </main>
  );
}
