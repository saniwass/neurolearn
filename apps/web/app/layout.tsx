export const metadata = {
  title: 'NeuroLearn',
  description: 'AI-powered personalized learning app'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
