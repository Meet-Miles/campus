export function Button({ label, link, secondary }: { label: string, link: string, secondary?: boolean }) {
    return (
        <a href={link} target={link.includes('https') ? `_blank` : `_self`}>
            <button className={`${secondary ? `bg-yellow text-blue` : `bg-blue text-white`} hover:brightness-105 hover:scale-105 active:scale-100 active:brightness-90 transition-all w-full rounded-md py-2 px-4`}>{label}</button>
        </a>
    )
}