import { Button } from "@/components/button";
import { Header } from "@/components/header";
import dynamic from 'next/dynamic';
import Head from "next/head";
import Link from "next/link";

const Editor = dynamic(() => import('../components/editor'), { ssr: false })

export default function Draw() {

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
            <Editor />
        </div>
    )
}
