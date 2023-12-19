import { Button } from "@/components/button";
import { Header } from "@/components/header";
import Head from "next/head";
import Link from "next/link";

export default function Kaart() {
    return (
        <div
            className={`flex flex-col justify-between min-h-screen`}
        >
            <Head>
                <title>Campus Zuid-Holland</title>
                <link rel="icon" href="/favicon.png" />
                <meta name="description" content="Campus Zuid-Holland" />
            </Head>

            <Header />
            <section className='mt-[40px] page-padding flex flex-col items-start gap-8 bg-white border-b border-darkGrey/20'>
                <div className="flex w-full justify-between items-center">
                    <Link href="/">
                        <img className='w-16 h-auto' src="/logo-campus-partly.png" alt="Logo" />
                    </Link>
                    <Button secondary label="Contact" link="mailto:campus@pzh.nl" />
                </div>
            </section>

            <iframe width="100%" height="100%" style={{
                height: 'calc(100vh - 152px)'
            }} src="https://miro.com/app/live-embed/uXjVNDqdhvs=/?moveToViewport=4175,-1,3135,1738&embedId=789239588597" scrolling="no" allow="fullscreen; clipboard-read; clipboard-write" allowFullScreen></iframe>
        </div>
    )
}
