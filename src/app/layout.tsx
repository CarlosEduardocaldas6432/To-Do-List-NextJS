import type { Metadata } from "next";
import "../css/globals.css";
import Link from "next/link";


export const metadata: Metadata = {
  title: "Lista de Tarefas",
  description: "Uma lista de tarefas feita em NextJS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body >
        <header>
          <h2 className="logo_marca"><Link className="link" href="/">Next.JS</Link> </h2>
          <div className="div_links">
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
