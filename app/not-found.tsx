import Link from 'next/link'
import Image from 'next/image'
import React from 'react'


const NotFound = () => {
    return (
        <section className="relative overflow-hidden bg-card-venta max-h-screen">
            <div
                className="relative px-8 py-24 mx-auto md:px-12 lg:px-32 max-w-7xl lg:py-56 xl:py-96">
                <div className="text-left sm:text-center">
                    <p
                        className="text-3xl font-medium font-display tracking-tight text-transparent pb-2 sm:text-5xl bg-gradient-to-r from-vanta-100 via-vanta-300 to-vanta-500 bg-clip-text">
                        Oops! Error 404 <span className="lg:block">Page Not Found</span>
                    </p>
                    <p className="max-w-md mx-auto mt-4 text-vanta-300">
                        The page you&apos;re looking for might have been moved, deleted, or never
                        existed in the first place. Double-check the URL or return to the
                        homepage to continue exploring.
                    </p>

                    <div
                        className="flex flex-col max-w-xl mx-auto justify-center gap-2 mt-12 sm:flex-row relative">
                        <a
                            href=""
                            className="flex items-center justify-center h-10 px-4 py-2 text-sm text-white transition-all rounded-lg hover:to-vanta-600 bg-gradient-to-b from-vanta-300 via-vanta-400 to-vanta-500"
                        >Join Now</a>
                        <Link
                            href="/"
                            className="rounded-lg px-4 py-2 text-sm transition-all flex items-center justify-center text-white bg-gradient-to-b from-white/[.105] to-white/[.15] hover:to-white/[.25] h-10 ring-1 ring-inset ring-white/10"
                        >Back Home</Link>
                    </div>
                </div>
                <Image
                    className="absolute blur-3xl w-96 mt-12 inset-x-0 h-96 mx-auto left-0"
                    src="/avatars/avatar1.svg"
                    alt="light reflection"
                    width={300}
                    height={300}
                />
            </div>
        </section>
    )
}

export default NotFound