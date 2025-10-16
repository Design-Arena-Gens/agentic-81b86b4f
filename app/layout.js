import "./globals.css";

export const metadata = {
  title: "دروید - دستیار هوشمند شما",
  description: "معرفی توانایی‌های ایجنت هوشمند برای کمک به توسعه و تصمیم‌گیری",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
