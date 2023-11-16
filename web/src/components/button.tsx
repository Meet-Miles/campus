export function Button({ label, link, secondary }: { label: string, link: string, secondary?: boolean }) {
    return (
        <a href={link} target={link.includes('https') ? `_blank` : `_self`}>
            <button className={`${secondary ? `bg-white text-darkBlue border border-darkBlue hover:text-green hover:border-green active:bg-green active:text-white` : `bg-darkBlue text-white hover:bg-[#16113B] active:bg-[#222222]`}  hover:scale-105 active:scale-100 transition-all w-full rounded-[4px] py-2 px-4`}>{label}</button>
        </a>
    )
}