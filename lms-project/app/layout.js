import connectDB from "@/lib/db";
import "./globals.css";

export default function RootLayout({ children }) {
  connectDB(); // ✅ this will trigger the DB connection

  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
