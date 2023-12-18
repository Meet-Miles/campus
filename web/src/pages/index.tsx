import { Button } from "@/components/button";
import { Footer } from "@/components/footer";
import { Form } from "@/components/form";
import { Header } from "@/components/header";
import { Space } from "@/components/space";
import { Tool } from "@/components/tool";
import Head from "next/head";
import Link from "next/link";
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

  const slides = [
    {
      text: "Doe de digitale tour door de campus",
      subText: "In samenwerking met een van de SiR alumni",
      imgSrc: "/tour-min.jpg",
      bgColor: 'bg-lightBlue',
      textColor: "text-darkBlue",
      bgTop: 'bg-darkBlue'
    },
    {
      text: "Workshop door Marianne Verbij",
      subText: "Verbeter co-creatie tussen de maatschappij en de overheid",
      imgSrc: "/workshop-min.jpg",
      bgColor: 'bg-[#503d90]',
      textColor: "text-white",
      bgTop: 'bg-white'
    },
    {
      text: "Campus gaat verhuizen",
      subText: "De locatie gaat veranderen. Binnenkort meer!",
      imgSrc: "/verhuizen-min.jpg",
      bgColor: 'bg-yellow',
      textColor: "text-darkBlue",
      bgTop: "bg-darkBlue",
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Effect hook to change slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);


  return (
    <div
      className={`flex flex-col justify-between min-h-screen`}
    >
      <Head>
        <title>Campus Zuid-Holland</title>
        <link rel="icon" href="/favicon.png" />
        <meta name="description" content="Campus Zuid-Holland" />
      </Head>

      <Header />
      <section className='mt-[40px] page-padding flex flex-col items-start gap-8 bg-white border-b border-darkGrey/20'>
        <div className="flex w-full justify-between items-center">
          <Link href="/">
            <img className='w-16 h-auto' src="/logo-campus-partly.png" alt="Logo" />
          </Link>
          <Button secondary label="Contact" link="mailto:campus@pzh.nl" />
        </div>
      </section>
      {/* <div className={`fixed top-0 bottom-0 right-0 left-0 z-10 transition-all ${open ? ` -translate-y-0 bg-darkBlue` : ` translate-y-full bg-darkBlue/0 `}`}></div> */}
      <div className={`bg-white h-[85dvh] overflow-y-scroll sm:h-screen fixed bottom-0 right-0 left-0 z-50 shadow-2xl shadow-black duration-700 transition-all ${open ? ` -translate-y-0` : ` translate-y-full`}`}>
        <div className="bg-darkBlue w-full h-[20px] sticky top-0"></div>
        <div className="p-4 flex flex-col gap-4 max-w-4xl m-auto">
          <div className="w-full flex justify-between items-center ">
            <p className='text-darkBlue text-2xl'>Boek een ruimte</p>
            <img onClick={() => {
              setOpen(!open)
            }} src="/close.svg" className="w-10 h-10 cursor-pointer" alt="" />
          </div>
          <Form />
        </div>
      </div>

      <h1 className='text-darkBlue page-padding !pb-0'>Welkom op de Campus Zuid-Holland</h1>
      <div className='grid grid-cols-1 lg:grid-cols-2'>
        <section className='page-padding grid grid-cols-1 gap-4'>
          <div className="grid grid-cols-1 sm:grid-cols-2 rounded-[4px] overflow-hidden ">
            <div className={`p-4 ${slides[currentSlide].bgColor} ${slides[currentSlide].textColor} flex flex-col gap-4 justify-between h-full`}>
              <p className="text-sm font-serif">Nieuws</p>
              <div className="flex flex-col gap-4">
                <p className="text-2xl lg:text-3xl">{slides[currentSlide].text}</p>
                <p className="font-serif">{slides[currentSlide].subText}</p>
              </div>
              <div className="flex gap-2">
                {slides.map((slide, index) => (
                  <div
                    key={index}
                    className={`h-[3px] ${index === currentSlide ? slides[currentSlide].bgTop : `${slides[currentSlide].bgTop} opacity-20`} w-8`}
                  ></div>
                ))}
              </div>
            </div>
            <div>
              <img src={slides[currentSlide].imgSrc} className='w-full h-full aspect-video sm:aspect-square object-cover object-center' alt="Slide Image" />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <p className='text-darkBlue text-2xl'>Ruimtes</p>
            <div className='flex flex-col gap-4'>
              <Space title="Entree" people="2 - 12" available />
              <Space title="Ontmoetingsplein" people="2 - 12" available />
              <Space title="Atelier" people="2 - 12" available={false} />
              <Space title="Landschapszaal" people="2 - 12" available={false} />
              <Space title="Co-creatie" people="2 - 12" available />
            </div>
            <div onClick={() => {
              setOpen(!open)
            }} className="bg-darkBlue text-white hover:bg-[#16113B] active:bg-[#222222] hover:scale-105 active:scale-100 transition-all w-full rounded-[4px] py-2 px-4 text-center cursor-pointer">
              Boek een ruimte
            </div>
          </div>
        </section>
        <section className='page-padding h-fit grid grid-cols-1 gap-4'>
          <p className='text-darkBlue text-2xl'>Tools</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-2  gap-4">
            <Tool title="Ga in gesprek met elkaar" cta="Naar chat" link="https://chat.whatsapp.com/L081b1M1qkjDmdDC36J0Ey" image="/whatsapp.webp" />
            <Tool reverse title="Deel makkelijk documenten" cta="Open WeTransfer" link={'https://wetransfer.com/'} image="/wetransfer.webp" />
            {/* <Tool title="Visualiseer ideeën" cta="Tekenen" link="/draw" image="/draw.png" /> */}
          </div>
        </section>

      </div>
      <Footer />
    </div>
  )
}
