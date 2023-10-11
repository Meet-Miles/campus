import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Space } from "@/components/space";
import { Tool } from "@/components/tool";
import { useState } from "react";

export default function Home() {

  const [open, setOpen] = useState(false);

  return (
    <div
      className={`flex flex-col justify-between min-h-screen`}
    >
      <Header />
      {/* <div className={`fixed top-0 bottom-0 right-0 left-0 z-10 transition-all ${open ? ` -translate-y-0 bg-blue` : ` translate-y-full bg-blue/0 `}`}></div> */}
      <div className={`bg-white h-[100svh] sm:h-auto fixed bottom-0 right-0 left-0 z-50 shadow-2xl shadow-black transition-all ${open ? ` -translate-y-0` : ` translate-y-full`}`}>
        <div className="p-4 flex flex-col gap-4 max-w-4xl m-auto">
          <div className="w-full flex justify-between items-center">
            <p className='text-blue text-2xl'>Ruimtes</p>
            <img onClick={() => {
              setOpen(!open)
            }} src="/close.svg" className="w-10 h-10 cursor-pointer" alt="" />
          </div>
          <form className='flex flex-col gap-4'>
            <select name="spaces" id="spaces" className="text-lg p-4 w-full bg-black/5 outline-none text-blue placeholder:text-blue/50">
              <option value="" selected disabled hidden>Kies een ruimte</option>
              <option value="volvo">Entree</option>
              <option value="volvo">Ontmoetplein</option>
              <option value="atelier">Atelier</option>
              <option value="landschapszaal">Landschapszaal</option>
              <option value="cocreatie">Co-creatie</option>
            </select>
            <input required type="date" id="date" name="date" placeholder="Date" className="text-lg p-4 w-full bg-black/5 outline-none text-blue placeholder:text-blue/50" />
            <div className="flex w-full justify-between gap-4">
              <div className="w-full flex flex-col gap-2">
                <p className="text-blue/75 flex flex-col gap-2">Start tijd</p>
                <input required type="time" step={1800} id="startTime" name="startTime" placeholder="Start tijd" className="text-lg p-4 w-full bg-black/5 outline-none text-blue placeholder:text-blue/50" />
              </div>
              <div className="w-full flex flex-col gap-2">
                <p className="text-blue/75 ">Eind tijd</p>
                <input required type="time" step={1800} id="endTime" name="endTime" placeholder="Eind tijd" className="text-lg p-4 w-full bg-black/5 outline-none text-blue placeholder:text-blue/50" />
              </div>
            </div>
            <input required type="text" id="name" name="name" placeholder="Naam" className="text-lg p-4 w-full bg-black/5 outline-none text-blue placeholder:text-blue/50" />
            <input required type="text" id="email" name="email" placeholder="E-mail" className="text-lg p-4 w-full bg-black/5 outline-none text-blue placeholder:text-blue/50" />
            <input required type="text" id="organisation" name="organisation" placeholder="Organisatie" className="text-lg p-4 w-full bg-black/5 outline-none text-blue placeholder:text-blue/50" />
            <input type="submit" className="bg-blue hover:brightness-105 hover:scale-105 active:scale-100 active:brightness-90 transition-all w-full text-white rounded-md py-4 px-2 text-center cursor-pointer" value={'Verstuur aanvraag'} />
          </form>
        </div>
      </div>
      <section className='page-padding flex flex-col items-start gap-8'>
        <img className='h-8' src="/logo.svg" alt="Logo" />
        <h1 className='text-blue '>Digitale campus</h1>
      </section>
      <div className='grid grid-cols-1 lg:grid-cols-2'>
        <section className='page-padding grid grid-cols-1 gap-4'>
          <div className="grid grid-cols-1 sm:grid-cols-2 ">
            <div className="p-4 bg-lightBlue text-white flex flex-col gap-4 justify-between h-full">
              <p className="text-sm font-serif">Nieuws</p>
              <div className="flex flex-col gap-4">
                <p className="text-xl md:text-2xl lg:text-3xl">Doe de digitale tour door de campus</p>
                <p className="font-serif">In samenwerking met een van de SiR alumni</p>
              </div>
              <div className="flex gap-2">
                <div className="h-[3px] bg-white w-8"></div>
                <div className="h-[3px] bg-white/50 w-8"></div>
                <div className="h-[3px] bg-white/50 w-8"></div>
              </div>
            </div>
            <div>
              <img src="/tour.png" className='w-full h-full aspect-video sm:aspect-square object-cover' alt="Slack" />
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
          <div className="grid xl:grid-cols-2 gap-4">
            <Tool title="Ga in gesprek met elkaar" cta="Open Tool" link="https://join.slack.com/t/campus-1ut1764/shared_invite/zt-24sble8pw-DVb_xfvxHAch_2z3IGhxOg" image="https://images.unsplash.com/photo-1587377838789-968194a7cc88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2358&q=80" />
            <Tool reverse title="Ga in gesprek met elkaar" cta="Open Tool" link="https://chat.whatsapp.com/L081b1M1qkjDmdDC36J0Ey" image="https://images.unsplash.com/photo-1587377838789-968194a7cc88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2358&q=80" />
            <Tool title="Deel makkelijk documenten" cta="Open Tool" link={'https://wetransfer.com/'} image="https://images.unsplash.com/photo-1625834318071-f28f0e51449b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80" />
          </div>
        </section>
      </div>
      <Footer />
    </div>
  )
}
