export function Button({ label, link }: { label: string, link: string }) {
    return (
        <a href={link} target={link.includes('https') ? `_blank` : `_self`}>
            <button className='bg-blue hover:brightness-105 hover:scale-105 active:scale-100 active:brightness-90 transition-all w-full text-white rounded-md py-4 px-2'>{label}</button>
        </a>
    )
}