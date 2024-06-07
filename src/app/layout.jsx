import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Providers from "./Providers";
import Navbar from "@/components/Navbar";
import Searchbar from "@/components/Search";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "IMBD Clone app",
  description: "Peace comes to the brave one",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="">
          <Providers>
            <Header />
            <Navbar />
            <Searchbar />
            {children}
            <Footer />
          </Providers>
        </div>
      </body>
    </html>
  );
}
//Provider is a client component but childrens inside it is server side. (SEO friendly)
