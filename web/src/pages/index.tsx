import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import Head from "next/head";
import { useEffect, useState } from "react";

export default function Home() {

  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.body.style.overflow = open ? 'hidden' : 'auto';
      // Cleanup
      return () => {
        document.body.style.overflow = 'auto';
      };
    }
  }, [open]);

  return (
    <div
      className={`flex flex-col justify-between min-h-screen`}
    >
      <Head>
        <title>Digitale Campus</title>
        <link rel="icon" href="/favicon.png" />
        <meta name="description" content="Digitale campus" />
      </Head>
      <Header />

      <Footer />
    </div>
  )
}
