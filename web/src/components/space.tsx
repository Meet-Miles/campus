export function Space({ title, people, available }: { title: string, people: string, available: boolean }) {
    return (
        <div className='grid grid-cols-[auto_1fr_auto] gap-4 items-center bg-grey '>
            <div>
                <img className='w-[50px] aspect-square' src={`/${title}.svg`} alt={`Icon for ${title}`} />
            </div>
            <div className="flex flex-col items-start">
                <p className='text-blue'>{title}</p>
                <p className="text-blue/50 text-xs">{people} personen</p>
            </div>
            <div className='flex items-center gap-1 mr-4'>
                <img src={available ? `/available.svg` : `/not-available.svg`} alt={available ? `Available` : `Not available`} className="w-4 h-4" />
                <p className={available ? `text-green` : `text-red`}>{available ? `Beschikbaar` : `Bezet`}</p>
            </div>
        </div>
    )
}