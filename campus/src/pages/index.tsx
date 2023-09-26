import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`${inter.className} flex flex-col justify-between min-h-screen`}
    >
      <header className='sticky top-0 py-2 px-6 bg-blue text-white flex justify-between items-center'>
        <p>Donderdag</p>
        <p>8:30 - 17:00</p>
      </header>
      <section className='page-padding flex flex-col items-start gap-4'>
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
              <p className='text-blue'>Keukenhof ruimte</p>
              <div className='flex items-center gap-2 mr-4'>
                <div className='bg-red rounded-full w-2 h-2'></div>
                <p className='text-red'>Bezet</p>
              </div>
            </div>
            <div className='grid grid-cols-[auto_1fr_auto] gap-4 items-center bg-grey '>
              <div>
                <img className='w-[50px] aspect-square' src="/ruimte-2.svg" alt="Icon" />
              </div>
              <p className='text-blue'>Keukenhof ruimte</p>
              <div className='flex items-center gap-2 mr-4'>
                <div className='bg-red rounded-full w-2 h-2'></div>
                <p className='text-red'>Bezet</p>
              </div>
            </div>
            <div className='grid grid-cols-[auto_1fr_auto] gap-4 items-center bg-grey '>
              <div>
                <img className='w-[50px] aspect-square' src="/ruimte-3.svg" alt="Icon" />
              </div>
              <p className='text-blue'>Keukenhof ruimte</p>
              <div className='flex items-center gap-2 mr-4'>
                <div className='bg-green rounded-full w-2 h-2'></div>
                <p className='text-green'>Beschikbaar</p>
              </div>
            </div>
          </div>
          <button className='bg-blue text-white rounded-md py-4 px-2 font-bold'>Boek een ruimte</button>
        </section>
        <section className='page-padding grid grid-cols-1  gap-4'>
          <p className='text-blue'>Tools</p>
          <div className='bg-grey  grid grid-cols-2 text-blue'>
            <div className='flex flex-col h-full justify-between items-start p-4'>
              <p className='text-xl'>Ga in gesprek met elkaar</p>
              <a href="">Open Slack {`->`}</a>
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
              <a href="">Open WeTransfer {`->`}</a>
            </div>
          </div>
        </section>
      </div>
      <footer className='flex justify-between items-center page-padding text-sm'>
        <a href="">Feedback</a>
        <a href="">Ontdek de campus</a>
        <a href="">GitHub</a>
      </footer>
    </main>
  )
}
