
'use client'
import { useState } from "react"
import Link from "next/link"
import './Navbar.css'

const Navbar = () => {

    const [openLinks, setOpenLinks] = useState<boolean>(true)

    const open = "open";
    const close = "close";

    const openLinksUpdate = () => {
        setOpenLinks(!openLinks)
    }

    return (
        <div>
            <div className="main-navbar bg-black text-white  shadow-xl border-b border-pink-700 fixed top-0 left-0 w-full z-50">
                <div className="container mx-auto px-4 py-12">
                    <header>
                        <Link className="logo" href='/'>
                            <h2 className="font-bold text-3xl">Beauty<span className="text-pink-600">Diva</span></h2>
                        </Link>
                        <div className="navleft" id={openLinks ? open : close}>
                        <h2 className="font-bold text-3xl">Beauty<span className="text-pink-600">Diva</span></h2>
                            <Link className="head-link"  href="/">Home</Link>
                            <Link className="head-link"  href="/about">About Us</Link>
                            <Link  className="head-link" href="/services">Services</Link>
                            <Link className="head-link"  href="/pricing">Pricing</Link>
                            <Link  className="head-link"  href="/contact">Contact</Link>
                            <Link className="px-5 py-3 bg-pink-600 text-white" href="/book">Book an Appoitment</Link>

                        </div>
                        <nav className="flex gap-5 navright" >
                            <Link className="head-link" href="/">Home</Link>
                            <Link  className="head-link" href="/about">About Us</Link>
                            <Link  className="head-link" href="/services">Services</Link>
                            <Link  className="head-link"  href="/pricing">Pricing</Link>
                            <Link  className="head-link"  href="/contact">Contact</Link>
                            <Link className="px-5 font-extrabold bg-pink-600 rounded-full text-white" href="/book">Book Now</Link>

                        </nav>
                        <svg onClick={openLinksUpdate} className="cursor-pointer jam jam-menu" id="openBtn" fill="#fff" width="50px" height="50px" viewBox="-5 -7 24 24"
                            xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin">
                            <path
                                d='M1 0h5a1 1 0 1 1 0 2H1a1 1 0 1 1 0-2zm7 8h5a1 1 0 0 1 0 2H8a1 1 0 1 1 0-2zM1 4h12a1 1 0 0 1 0 2H1a1 1 0 1 1 0-2z' />
                        </svg>
                    </header>
                </div>
            </div>
        </div>
    )
}

export default Navbar