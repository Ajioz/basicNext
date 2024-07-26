import "../globals.css";

export const metadata = {
  title: "News",
  description: "Modern News app!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
          {children}
      </body>
    </html>
  );
}
