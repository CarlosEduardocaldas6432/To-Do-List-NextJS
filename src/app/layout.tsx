import type { Metadata } from "next";
import "../css/globals.css";


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
        {children}
      </body>
    </html>
  );
}
