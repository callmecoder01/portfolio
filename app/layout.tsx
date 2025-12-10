import "./globals.css";
import { Inter, Poppins } from "next/font/google";
import { Toaster } from "react-hot-toast";
import FloatingBlobs from "@/components/effects/FloatingBlobs";
import CursorGlow from "@/components/effects/CursorGlow";

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
});

const poppins = Poppins({
  weight: ['600', '700', '800'],
  subsets: ["latin"],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata = {
  title: "Saroj Kumar | Full-Stack Developer",
  description: "Full-stack developer passionate about creating beautiful, functional, and user-centered digital experiences.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="overflow-x-hidden">
        <FloatingBlobs />
        <CursorGlow />
        {children}
        <Toaster
          position="top-center"
          toastOptions={{
            className: 'glass-card',
            style: {
              borderRadius: '1rem',
            },
          }}
        />
      </body>
    </html>
  );
}
