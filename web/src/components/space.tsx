export function Space({ title, people, available, secondaryDescription, time }: { time?: string, secondaryDescription?: string, title: string, people?: string, available: boolean }) {
    return (
        <div className='grid grid-cols-[auto_1fr_auto] gap-4 items-center bg-grey rounded-[4px] overflow-hidden'>
            <div>
                <img className='w-[50px] aspect-square' src={`/${secondaryDescription ? secondaryDescription : title}.svg`} alt={`Icon for ${title}`} />
            </div>
            <div className="flex flex-col items-start">
                <p className='text-darkBlue'>{title}</p>
                {secondaryDescription ? <p className="text-darkBlue text-xs">{secondaryDescription}</p> : null}
                {!secondaryDescription ? <p className="text-darkBlue text-xs">{people} personen</p> : null}
            </div>
            {time ? <p className="text-darkBlue text-xs mr-4">{time}</p> : null}

            {!time ?

                <div className={`flex items-center gap-1 mr-4 px-2 py-1 rounded-[4px] ${available ? `bg-green` : `bg-red`}`}>
                    {/* <img src={available ? `/available.svg` : `/not-available.svg`} alt={available ? `Available` : `Not available`} className="w-4 h-4" /> */}
                    <p className={`text-white uppercase text-xs`}>{available ? `Beschikbaar` : `Bezet`}</p>
                </div>
                :
                null
            }
        </div>
    )
}