import "./globals.css";
import "@fontsource/outfit/400.css";
import "@fontsource/outfit/500.css";
import "@fontsource/outfit/600.css";
import "@fontsource/outfit/700.css";
import "@fontsource/outfit/800.css";

export const metadata = {
  title: { default: "Flymatas Travels & Tours", template: "%s | Flymatas Travels & Tours" },
  description: "Flymatas Travels & Tours: study abroad, work abroad, visas, medical tourism, migration and holidays. Escape The Ordinary.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
