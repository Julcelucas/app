import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Plataforma de Currículos Inteligentes',
  description: 'Crie, analise e recomende vagas com inteligência de carreira.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
