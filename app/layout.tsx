import { EnvVarWarning } from "@/components/env-var-warning";
import HeaderAuth from "@/components/header-auth";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";
import { GeistSans } from "geist/font/sans";
import { ThemeProvider } from "next-themes";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";  // Import Next.js Head component
<<<<<<< HEAD
=======
import BgAudioPlayer from "@/components/bg-audio-player";  // Import the BgAudioPlayer
>>>>>>> parent of 8f71aea (Media Page Add)
import "./globals.css";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "MOOD MNKY: Agent Chat",
  description: "The fastest way to build your personal virtual assistant!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className} suppressHydrationWarning>
      <Head>
        <title>MOOD MNKY: Agent Chat</title>
        <link rel="icon" type="image/png" href="/favicon.png" />{/* Add the favicon here */}
      </Head>
      <body className="bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="min-h-screen flex flex-col items-center justify-center">
<<<<<<< HEAD
            <div className="flex-1 w-full flex flex-col items-center">
              <nav className="sticky top-0 w-full flex justify-center h-16 backdrop-blur-md bg-black/70 border-b border-white/10 z-50 shadow-lg">
=======
            {/* Add the BgAudioPlayer here */}
            <div className="fixed left-4 top-1/4 transform -translate-y-1/2 z-50">
              <BgAudioPlayer />
            </div>
            
            <div className="flex-1 w-full flex flex-col items-center">
              <nav className="sticky top-0 w-full flex justify-center h-16 backdrop-blur-md bg-black/70 border-b border-white/10 z-40 shadow-lg">
>>>>>>> parent of 8f71aea (Media Page Add)
                <div className="w-full max-w-5xl flex justify-between items-center p-2 px-4 text-sm"> {/* Adjust padding here */}
                  <div className="flex gap-5 items-center font-semibold">
                    <a href="/" className="focus:outline-none">
                      <Image
                        src="/mood_mnky_brand.svg"
                        alt="MOOD MNKY Logo"
                        width={80}
                        height={80}
                        className="mr-4"
                      />
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    {!hasEnvVars ? <EnvVarWarning /> : <HeaderAuth />}
                  </div>
                </div>
              </nav>
              <div className="flex flex-col items-center w-full p-5"> {/* Center children */}
                {children}
              </div>

              <footer className="w-full flex items-center justify-center border-t mx-auto text-center text-xs gap-8 py-4"> {/* Adjust padding here */}
                <p>
                  Powered by{" "}
                  <a
                    href="https://shop.moodmnky.com"
                    target="_blank"
                    className="font-bold hover:underline"
                    rel="noreferrer"
                  >
                    MOOD MNKY
                  </a>
                </p>
                <ThemeSwitcher />
              </footer>
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
