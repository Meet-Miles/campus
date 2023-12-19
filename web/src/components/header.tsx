import Link from "next/link";
import { useState } from "react";

export function Header() {
    const days = ["Zondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag"];
    const currentDay = days[new Date().getDay()];

    const [open, setOpen] = useState(false);
    return (
        <header className={` fixed w-full z-[999]  top-0 bg-darkblue text-white/75 flex justify-between flex-col gap-2`}>
            <div onClick={() => {
                setOpen(!open)
            }} className={`text-white/75 cursor-pointer hover:brightness-125  z-[999] duration-200 py-2 px-6 ${open ? `bg-blue text-white/25` : `bg-darkBlue`} h-full w-full flex justify-between items-center`}>
                <p>{currentDay}</p>
                <p>8:30 - 17:00</p>
            </div>
            {/* show divs below only when clicking header */}
            <div className={`fixed top-[40px] px-6 py-4 bg-darkBlue z-0 left-0 right-0 duration-500 transition-all ${open ? ` translate-y-0  !z-50` : ` -translate-y-full`}  transition-all flex flex-col gap-4`}>
                <div className="flex justify-between items-center">
                    <p className="text-xl text-white font-sans">Openingstijden</p>
                    {/* svg icon of close button, in white */}
                    <img onClick={() => {
                        setOpen(!open)
                    }} src="/close-white.svg" className="w-8 in h-8 cursor-pointer" alt="" />
                </div>
                <div className={`${currentDay === `Maandag` ? `text-white/100` : `text-white/50`} flex justify-between items-center`}>
                    <p>Maandag</p>
                    <p>8:30 - 17:00</p>
                </div>
                <div className={`${currentDay === `Dinsdag` ? `text-white/100` : `text-white/50`} flex justify-between items-center`}>
                    <p>Dinsdag</p>
                    <p>8:30 - 17:00</p>
                </div>
                <div className={`${currentDay === `Woensdag` ? `text-white/100` : `text-white/50`} flex justify-between items-center`}>
                    <p>Woensdag</p>
                    <p>8:30 - 17:00</p>
                </div>
                <div className={`${currentDay === `Donderdag` ? `text-white/100` : `text-white/50`} flex justify-between items-center`}>
                    <p>Donderdag</p>
                    <p>8:30 - 17:00</p>
                </div>
                <div className={`${currentDay === `Vrijdag` ? `text-white/100` : `text-white/50`} flex justify-between items-center`}>
                    <p>Vrijdag</p>
                    <p>8:30 - 17:00</p>
                </div>
                <div className={`${currentDay === `Zaterdag` ? `text-white/100` : `text-white/50`} flex justify-between items-center`}>
                    <p>Zaterdag</p>
                    <p>Gesloten</p>
                </div>
                <div className={`${currentDay === `Zondag` ? `text-white/100` : `text-white/50`} flex justify-between items-center`}>
                    <p>Zondag</p>
                    <p>Gesloten</p>
                </div>
                <div className="w-full flex items-center gap-4">
                    <a target="_blank" rel="noreferrer" href="https://chat.whatsapp.com/L081b1M1qkjDmdDC36J0Ey">
                        <img src="/wa.svg" className="w-6 h-8 opacity-50 hover:opacity-100 transition-all cursor-pointer" alt="WhatsApp" />
                    </a>
                    <a target="_blank" rel="noreferrer" href="https://wetransfer.com">
                        <img src="/wetransfer.svg" className="w-8 h-8 opacity-50 hover:opacity-100 transition-all cursor-pointer" alt="WhatsApp" />
                    </a>
                    <Link href="/kaart">
                        <img src="/miro.png" className="w-12 object-contain h-8 opacity-50 hover:opacity-100 transition-all cursor-pointer" alt="Digitale kaart" />
                    </Link>
                </div>
            </div>
        </header>
    )
}