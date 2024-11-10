import "./globals.css"; 

export const metadata = {
  title: "Blockchain HQ",
  description: "Generated by Blockchain HQ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
