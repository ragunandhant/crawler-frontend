"use client";
import { Header } from "@/components/Header";
import "./globals.css";
import { ClerkProvider } from '@clerk/nextjs'
import { Toaster } from "@/components/ui/toaster";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html>
        <body>
          <Header />
       
      
    {children}
    <Toaster/>

    </body>
    </html>
    </ClerkProvider>
  );
}
