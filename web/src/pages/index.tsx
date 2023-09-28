import { Button } from "@/components/button";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Space } from "@/components/space";
import { Tool } from "@/components/tool";

export default function Home() {


  return (
    <div
      className={`flex flex-col justify-between min-h-screen`}
    >
      <Header />
      <section className='page-padding flex flex-col items-start gap-8'>
        <img className='h-8' src="/logo.svg" alt="Logo" />
        <h1 className='text-blue '>Digitale campus</h1>
      </section>
      <div className='grid grid-cols-1 lg:grid-cols-2'>
        <section className='page-padding flex flex-col gap-4'>
          <div className="grid grid-cols-2 ">
            <div className="p-4 bg-lightBlue text-white flex flex-col gap-4 justify-between h-full">
              <p className="text-sm font-serif">Nieuws</p>
              <div className="flex flex-col gap-4">
                <p className="text-xl">Doe de digitale tour door de campus</p>
                <p className="font-serif">In samenwerking met een van de SiR alumni</p>
              </div>
              <div className="flex gap-2">
                <div className="h-[3px] bg-white w-8"></div>
                <div className="h-[3px] bg-white/50 w-8"></div>
                <div className="h-[3px] bg-white/50 w-8"></div>
              </div>
            </div>
            <div>
              <img src="/tour.png" className='w-full h-full aspect-square object-cover' alt="Slack" />
            </div>
          </div>
          <p className='text-blue'>Ruimtes</p>
          <div className='flex flex-col gap-4'>
            <Space title="Entree" people="2 - 12" available />
            <Space title="Ontmoetplein" people="2 - 12" available />
            <Space title="Atelier" people="2 - 12" available={false} />
            <Space title="Landschapszaal" people="2 - 12" available={false} />
            <Space title="Co-creatie" people="2 - 12" available />
          </div>
          <Button label="Boek een ruimte" link="mailto:campus@pzh.nl" />
        </section>
        <section className='page-padding h-fit grid grid-cols-1 gap-4'>
          <p className='text-blue'>Tools</p>
          <Tool title="Ga in gesprek met elkaar" cta="Open Tool" image="https://images.unsplash.com/photo-1587377838789-968194a7cc88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2358&q=80" />
          <Tool reverse title="Deel makkelijk documenten" cta="Open Tool" image="https://images.unsplash.com/photo-1625834318071-f28f0e51449b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80" />
        </section>
      </div>
      <Footer />
    </div>
  )
}
