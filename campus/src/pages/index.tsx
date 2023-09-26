export default function Home() {
  return (
    <div
      className={`flex flex-col justify-between min-h-screen`}
    >
      <header className='sticky top-0 py-2 px-6 bg-blue text-white/75 flex justify-between items-center'>
        <p>Donderdag</p>
        <p>8:30 - 17:00</p>
      </header>
      <section className='page-padding flex flex-col items-start gap-8'>
        <img className='h-8' src="/logo.svg" alt="Logo" />
        <h1 className='text-blue font-bold'>Welkom op de campus</h1>
      </section>
      <div className='grid grid-cols-1 lg:grid-cols-2'>
        <section className='page-padding flex flex-col gap-4'>
          <p className='text-blue'>Ruimtes</p>
          <div className='flex flex-col gap-4'>
            <div className='grid grid-cols-[auto_1fr_auto] gap-4 items-center bg-grey '>
              <div>
                <img className='w-[50px] aspect-square' src="/ruimte-1.svg" alt="Icon" />
              </div>
              <div className="flex flex-col items-start">
                <p className='text-blue'>Keukenhof</p>
                <p className="text-blue/50 text-xs">2 - 12 personen</p>
              </div>
              <div className='flex items-center gap-2 mr-4'>
                <img src="/not-available.svg" alt="Not available" className="w-4 h-4" />
                <p className='text-red'>Bezet</p>
              </div>
            </div>
            <div className='grid grid-cols-[auto_1fr_auto] gap-4 items-center bg-grey '>
              <div>
                <img className='w-[50px] aspect-square' src="/ruimte-2.svg" alt="Icon" />
              </div>
              <div className="flex flex-col items-start">
                <p className='text-blue'>Erasmusbrug</p>
                <p className="text-blue/50 text-xs">2 - 12 personen</p>
              </div>
              <div className='flex items-center gap-2 mr-4'>
                <img src="/not-available.svg" alt="Not available" className="w-4 h-4" />
                <p className='text-red'>Bezet</p>
              </div>
            </div>
            <div className='grid grid-cols-[auto_1fr_auto] gap-4 items-center bg-grey '>
              <div>
                <img className='w-[50px] aspect-square' src="/ruimte-3.svg" alt="Icon" />
              </div>
              <div className="flex flex-col items-start">
                <p className='text-blue'>Mauritshuis</p>
                <p className="text-blue/50 text-xs">2 - 12 personen</p>
              </div>
              <div className='flex items-center gap-1 mr-4'>
                <img src="/available.svg" alt="Available" className="w-4 h-4" />
                <p className='text-green'>Beschikbaar</p>
              </div>
            </div>
          </div>
          <a href="mailto:campus@pzh.nl">
            <button className='bg-blue w-full text-white rounded-md py-4 px-2 font-bold'>Boek een ruimte</button>
          </a>
        </section>
        <section className='page-padding grid grid-cols-1 gap-4'>
          <p className='text-blue'>Tools</p>
          <div className='bg-grey  grid grid-cols-2 text-blue'>
            <div className='flex flex-col h-full justify-between items-start p-4'>
              <p className='text-xl'>Ga in gesprek met elkaar</p>
              <a href="" className='text-sm font-serif'>Open Slack</a>
            </div>
            <div>
              <img src="/slack.png" className='w-full h-full object-cover' alt="Slack" />
            </div>
          </div>
          <div className='bg-grey grid grid-cols-2 text-blue'>
            <div>
              <img src="/wetransfer.png" className='w-full h-full object-cover' alt="Slack" />
            </div>
            <div className='flex flex-col h-full justify-between items-start p-4'>
              <p className='text-xl'>Deel makkelijk documenten</p>
              <a href="" className='text-sm font-serif'>Open WeTransfer</a>
            </div>
          </div>
        </section>
      </div>
      <footer className='flex justify-between items-center page-padding text-sm text-blue/75' >
        <a href="">Feedback</a>
        <a href="">Ontdek de campus</a>
        <a href="">GitHub</a>
      </footer>
    </div>
  )
}
