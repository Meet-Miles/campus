export function Tool({ title, cta, image, reverse, link }: { link: string, title: string, cta: string, image: string, reverse?: boolean }) {

    return (
        <a href={link} target="_blank" rel="noreferrer">
            <div className='bg-grey hover:scale-105 active:scale-100 active:brightness-90 transition-all cursor-pointer grid grid-cols-2 text-blue'>
                <div className={`${reverse ? `order-1` : ` order-0`} flex flex-col h-full justify-between items-start p-4`}>
                    <p className='text-xl'>{title}</p>
                    <p className='text-sm font-serif'>{cta}</p>
                </div>
                <div className={`${reverse ? `order-0` : ` order-1`}`}>
                    <img className='w-full h-full aspect-square object-cover' src={image} alt="Communiceren met elkaar" />
                </div>
            </div>
        </a>
    )
}