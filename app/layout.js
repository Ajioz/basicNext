import "./globals.css";
import Header from "@/components/mainHeader/Header";

export const metadata = {
  title: "News",
  description: "Modern News app!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
