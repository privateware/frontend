import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Anoncodes",
  description: "Description of Anoncodes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        {children}
      </body>
    </html>
  );
}
