import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../globals.css";

// export const metadata = {
//   title: "E Learn",
//   description: "Generated by Softring Solutions",
// };

export default function RootLayout({ children }) {
  const isAuthenticated = false;
  return (
    <html lang="en">
      <body>
        <header>
          <Navbar auth={isAuthenticated} />
        </header>
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
