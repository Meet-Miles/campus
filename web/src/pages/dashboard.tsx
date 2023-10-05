import { Space } from "@/components/space";

export default function Dashboard() {
    const days = ["Zondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag"];
    const currentDay = days[new Date().getDay()];
    return (
        <div
            className={`flex flex-col justify-between min-h-screen`}
        >
            <section className='page-padding flex justify-between items-center gap-8'>
                <img className='h-16' src="/logo.svg" alt="Logo" />
                <div className="flex flex-col items-end">
                    <h1 className='text-blue text-2xl'>Digitale campus</h1>
                    <p className="text-blue font-serif">{currentDay}</p>
                </div>
            </section>
            <div className='grid grid-cols-1 lg:grid-cols-[0.4fr_0.6fr]'>
                <section className='page-padding flex flex-col gap-4'>

                    <p className='text-blue text-2xl'>Dagprogramma</p>
                    <div className='flex flex-col gap-4'>
                        <Space title="Entree" people="2 - 12" available />
                        <Space title="Ontmoetplein" people="2 - 12" available />
                        <Space title="Atelier" people="2 - 12" available={false} />
                        <Space title="Landschapszaal" people="2 - 12" available={false} />
                        <Space title="Co-creatie" people="2 - 12" available />
                    </div>
                    <div className="grid grid-cols-2 ">
                        <div className="p-4 bg-blue text-white flex flex-col gap-4 justify-center h-full">
                            <div className="flex flex-col gap-4">
                                <p className="text-4xl">Iets vergeten te bespreken?</p>
                                <div className="flex flex-col gap-4">
                                    <p className="font-serif text-2xl">Ga verder op campus.pzh.nl</p>
                                    <img src="/qr.svg" className="w-16 h-16" alt="" />
                                </div>
                            </div>

                        </div>
                        <div className="bg-blue">
                            <img src="/phone.png" className='w-full h-full object-contain' alt="Slack" />
                        </div>
                    </div>
                </section>
                <section className='page-padding h-full grid grid-cols-1 gap-4'>
                    <div className="grid grid-cols-2 ">
                        <div className="p-4 bg-green text-white flex flex-col gap-4 justify-between h-full">
                            <p className="text-2xl font-serif">Nieuws</p>
                            <div className="flex flex-col gap-4">
                                <p className="text-4xl">Doe de digitale tour door de campus</p>
                                <p className="font-serif text-2xl">In samenwerking met een van de SiR alumni</p>
                            </div>
                            <div className="flex gap-2">
                                <div className="h-[3px] bg-white w-8"></div>
                                <div className="h-[3px] bg-white/50 w-8"></div>
                                <div className="h-[3px] bg-white/50 w-8"></div>
                            </div>
                        </div>
                        <div className="bg-green">
                            <img src="/dashboard.png" className='w-full h-full object-contain object-bottom' alt="Slack" />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
