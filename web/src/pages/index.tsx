import { Button } from "@/components/button";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Space } from "@/components/space";
import { Tool } from "@/components/tool";
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
      {/* <div className={`fixed top-0 bottom-0 right-0 left-0 z-10 transition-all ${open ? ` -translate-y-0 bg-blue` : ` translate-y-full bg-blue/0 `}`}></div> */}
      {/* <div className={`bg-white h-[85dvh] overflow-y-scroll sm:h-screen fixed bottom-0 right-0 left-0 z-50 shadow-2xl shadow-black duration-700 transition-all ${open ? ` -translate-y-0` : ` translate-y-full`}`}>
        <div className="bg-blue w-full h-[20px] sticky top-0"></div>
        <div className="p-4 flex flex-col gap-4 max-w-4xl m-auto">
          <div className="w-full flex justify-between items-center ">
            <p className='text-blue text-2xl'>Boek een ruimte</p>
            <img onClick={() => {
              setOpen(!open)
            }} src="/close.svg" className="w-10 h-10 cursor-pointer" alt="" />
          </div>
          <Form />
        </div>
      </div> */}
      <section className='page-padding flex flex-col items-start gap-8'>
        <div className="flex w-full justify-between items-center">
          <img className='w-16 h-auto' src="/logo-campus.png" alt="Logo" />
          <Button secondary label="Contact" link="mailto:campus@pzh.nl" />
        </div>
        <h1 className='text-blue '>Digitale campus</h1>
      </section>
      <div className='grid grid-cols-1 lg:grid-cols-2'>
        <section className='page-padding grid grid-cols-1 gap-4'>
          <div className="grid grid-cols-1 sm:grid-cols-2 ">
            <div className="p-4 bg-blue text-white flex flex-col gap-4 justify-between h-full">
              <p className="text-sm font-serif">Nieuws</p>
              <div className="flex flex-col gap-4">
                <p className="text-2xl lg:text-3xl">Doe de digitale tour door de campus</p>
                <p className="font-serif">In samenwerking met een van de SiR alumni</p>
              </div>
              <div className="flex gap-2">
                <div className="h-[3px] bg-white w-8"></div>
                <div className="h-[3px] bg-white/50 w-8"></div>
                <div className="h-[3px] bg-white/50 w-8"></div>
              </div>
            </div>
            <div>
              <img src="/tour.webp" className='w-full h-full aspect-video sm:aspect-square object-cover' alt="Slack" />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <p className='text-blue text-2xl'>Ruimtes</p>
            <div className='flex flex-col gap-4'>
              <Space title="Entree" people="2 - 12" available />
              <Space title="Ontmoetplein" people="2 - 12" available />
              <Space title="Atelier" people="2 - 12" available={false} />
              <Space title="Landschapszaal" people="2 - 12" available={false} />
              <Space title="Co-creatie" people="2 - 12" available />
            </div>
            <div onClick={() => {
              setOpen(!open)
            }} className="bg-blue hover:brightness-105 hover:scale-105 active:scale-100 active:brightness-90 transition-all w-full text-white rounded-md py-4 px-2 text-center cursor-pointer">
              Boek een ruimte
            </div>
          </div>
        </section>
        <section className='page-padding h-fit grid grid-cols-1 gap-4'>
          <p className='text-blue text-2xl'>Tools</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-1  gap-4">
            <Tool title="Ga in gesprek met elkaar" cta="Naar chat" link="https://chat.whatsapp.com/L081b1M1qkjDmdDC36J0Ey" image="/whatsapp.webp" />
            <Tool reverse title="Deel makkelijk documenten" cta="Open WeTransfer" link={'https://wetransfer.com/'} image="/wetransfer.webp" />
          </div>
        </section>
      </div>
      <Footer />
    </div>
  )
}
