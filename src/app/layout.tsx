import type { Metadata } from 'next';
import '../css/globals.css';
import Link from 'next/link';
import  TrpcProvider  from '@/components/TrpcProvider'; // Ajuste o caminho conforme sua estrutura

export const metadata: Metadata = {
  title: 'Lista de Tarefas',
  description: 'Uma lista de tarefas feita em NextJS',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body>
        <header>
          <h2 className="logo_marca">
            <Link className="link" href="/">
              Next.JS
            </Link>
          </h2>
        </header>
        <TrpcProvider>{children}</TrpcProvider>
      </body>
    </html>
  );
}