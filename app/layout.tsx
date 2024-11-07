import { EnvVarWarning } from "@/components/env-var-warning";
import HeaderAuth from "@/components/header-auth";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";
import { GeistSans } from "geist/font/sans";
import { ThemeProvider } from "next-themes";
import Link from "next/link";
import Image from "next/image";
import { DraggableAudioPlayer } from "@/components/draggable-audio-player";
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
      <body className="bg-background text-foreground overflow-hidden">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="h-screen flex flex-col">
            <DraggableAudioPlayer />
            
            <nav className="flex-none h-16 backdrop-blur-md bg-black/70 border-b border-white/10 z-40 shadow-lg">
              <div className="h-full max-w-5xl mx-auto flex justify-between items-center p-2 px-4 text-sm">
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

            <main className="flex-1 overflow-hidden">
              {children}
            </main>

            <footer className="flex-none h-12 border-t border-white/10">
              <div className="h-full max-w-5xl mx-auto flex items-center justify-center gap-8 text-xs">
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
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
