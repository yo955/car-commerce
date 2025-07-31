import Image from 'next/image'
import React from 'react'
import { NavLink } from './NavLink'

const Logo = () => {
    return (
        <>  {/* Logo */}
            <NavLink href="/" className="flex items-center gap-2">
                <Image
                    src="https://flowbite.com/docs/images/logo.svg"
                    alt="BidCars Logo"
                    width={32}
                    height={32}
                    className="h-8 w-auto"
                />
                <span className="text-2xl font-semibold text-white">BidCars</span>
            </NavLink></>
    )
}

export default Logo