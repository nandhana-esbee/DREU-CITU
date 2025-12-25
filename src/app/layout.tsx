import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import Image from "next/image";

export const metadata: Metadata = {
  title: 'CITU Connect',
  description: 'DREU-CITU Carriage and Wagon Works, Perambur',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <Image
          src="/images/background.jpg"
          alt="Abstract background"
          fill
          className="object-cover -z-10 filter blur-sm"
          data-ai-hint="abstract background"
        />
        <div className="relative z-0 bg-background/80 min-h-screen">
          {children}
        </div>
        <Toaster />
      </body>
    </html>
  );
}
