export function Header() {
    const days = ["Zondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag"];
    const currentDay = days[new Date().getDay()];
    return (
        <header className='fixed w-full z-10 top-0 py-2 px-6 bg-darkBlue text-white/75 flex justify-between items-center'>
            <p>{currentDay}</p>
            <p>8:30 - 17:00</p>
        </header>
    )
}