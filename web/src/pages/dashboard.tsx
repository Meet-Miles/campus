import { Space } from "@/components/space";

export default function Dashboard() {
    const days = ["Zondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag"];
    const currentDay = days[new Date().getDay()];
    return (
        <div
            className={`flex flex-col justify-between min-h-screen`}
        >
            <section className='page-padding flex justify-between items-center gap-8'>
                <img className='w-24 h-auto object-contain' src="/logo-campus-partly.png" alt="Logo" />
                <div className="flex flex-col items-end">
                    <h1 className='text-darkBlue text-2xl'>Welkom op de Campus Zuid-Holland</h1>
                    <p className="text-darkBlue font-serif">{currentDay} 13 oktober 2023</p>
                </div>
            </section>
            <div className='grid grid-cols-1 lg:grid-cols-[0.4fr_0.6fr]'>
                <section className='page-padding flex flex-col gap-4'>
                    <p className='text-darkBlue text-4xl mb-4'>Dagprogramma</p>
                    <div className='flex flex-col gap-4'>
                        <Space title="Geen afspraken" time="Beschikbaar" secondaryDescription="Entree" available={false} />
                        <Space title="Bijpraat lunch Campus" time="12:00 - 13:00" secondaryDescription="Ontmoetingsplein" available={false} />
                        <Space title="Teamoverleg ruimtelijke puzzel" time="Nu bezig" secondaryDescription="Atelier" available={false} />
                        <Space title="Startup your day right - koffiemoment" time="9:30 - 10:00" secondaryDescription="Landschapszaal" available={false} />
                        <Space title="Workshop digitalisatie" time="13:30 - 14:30" secondaryDescription="Co-creatie" available />
                    </div>
                    <div className="grid grid-cols-2 h-full rounded-[4px] overflow-hidden">
                        <div className="p-4 bg-darkBlue text-white flex flex-col gap-4 justify-center h-full">
                            <div className="flex flex-col gap-4">
                                <p className="text-4xl">Iets vergeten te bespreken?</p>
                                <div className="flex flex-col gap-4">
                                    <p className="font-serif text-2xl">Ga verder op campus.pzh.nl</p>
                                    <img src="/qr.svg" className="w-16 h-16" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="bg-darkBlue">
                            <img src="/phone.webp" className='w-full h-full object-bottom object-contain' alt="Slack" />
                        </div>
                    </div>
                </section>
                <section className='page-padding h-full grid grid-cols-1 gap-4'>
                    <div className="grid grid-cols-2 rounded-[4px] overflow-hidden">
                        <div className="p-4 bg-[#503d90] text-white flex flex-col gap-4 justify-between h-full">
                            <p className="text-2xl font-serif">Nieuws</p>
                            <div className="flex flex-col gap-4">
                                <p className="font-serif text-2xl">16 November 2023</p>
                                <p className="text-4xl">Workshop door Marianne Verbij</p>
                                <p className="font-serif text-2xl">Verbeter co-creatie tussen de maatschappij en de overheid</p>
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
