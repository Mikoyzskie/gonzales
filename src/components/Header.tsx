import React from 'react'
import { righteous } from "@/app/font"
import Link from "next/link"
import Image from 'next/image'

export default function Header() {
    return (
        <header className='glass w-full mx-auto py-6 px-6 md:px-0 absolute top-0 inset-x-0 z-10'>
            <div className='max-w-screen-xl w-full mx-auto flex justify-between items-center'>
                <Link href={"/"} className='flex gap-5 items-center'>
                    <Image
                        src={"/gonzalogo.png"}
                        alt='gonzales furniture'
                        width={200}
                        height={200}
                        className='w-[60px] h-[60px]'
                    />
                    <div>
                        <h2 className={`text-2xl madimi-one-regular`}>GONZALES FURNITURE</h2>
                        <p className='text-xs'>Quality Made-To-Order Furniture</p>
                    </div>
                </Link>
                <div className='hidden md:flex gap-10 uppercase text-xs font-bold tracking-wider'>
                    <Link href={"/projects"}>Projects</Link>
                    <Link href={"/gallery"}>Gallery</Link>
                    <Link href={"/testimonials"}>Testimonails</Link>
                    <Link href={"/estimation"}>Get a Quote</Link>
                </div>
                <a href='/contact' className="border text-xs relative bg-gradient-to-r from-orange-400 to-pink-600 text-white heading font-bold uppercase px-4 py-4 rounded-full">
                    <span>{"Let's"} Connect</span>
                    <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
                </a>
            </div>
        </header>
    )
}
