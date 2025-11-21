import Footer from "./components/footer";
import Header from "./components/header";
import "./globals.css";


export const metadata = {
  title: "Invisual Signs",
  description: "Invisual coded website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="min-h-screen">
      <body
        className={`min-h-screen`}
      >
      <Header />
          {children}
      <Footer />
      </body>
    </html>
  );
}
