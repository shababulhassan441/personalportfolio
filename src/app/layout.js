import { Space_Grotesk } from 'next/font/google';
import "./globals.css";
import Header from "@/components/Header";
import Footer from '@/components/Footer';

const Space = Space_Grotesk({ subsets: ['latin'] })
export const metadata = {
  title: "Shabab Ul Hassan | Portfolio",
  description: "Created in Next JS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${Space.className} antialiased `}>
      <Header />  
        {children}
      <Footer />
      </body>
    </html>
  );
}
