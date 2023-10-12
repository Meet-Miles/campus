export function Space({ title, people, available, secondaryDescription, time }: { time?: string, secondaryDescription?: string, title: string, people?: string, available: boolean }) {
    return (
        <div className='grid grid-cols-[auto_1fr_auto] gap-4 items-center bg-grey '>
            <div>
                <img className='w-[50px] aspect-square' src={`/${secondaryDescription ? secondaryDescription : title}.svg`} alt={`Icon for ${title}`} />
            </div>
            <div className="flex flex-col items-start">
                <p className='text-blue'>{title}</p>
                {secondaryDescription ? <p className="text-blue text-xs">{secondaryDescription}</p> : null}
                {!secondaryDescription ? <p className="text-blue text-xs">{people} personen</p> : null}
            </div>
            {time ? <p className="text-blue text-xs mr-4">{time}</p> : null}

            {!time ?

                <div className='flex items-center gap-1 mr-4'>
                    <img src={available ? `/available.svg` : `/not-available.svg`} alt={available ? `Available` : `Not available`} className="w-4 h-4" />
                    <p className={available ? `text-green` : `text-red`}>{available ? `Beschikbaar` : `Bezet`}</p>
                </div>
                :
                null
            }
        </div>
    )
}