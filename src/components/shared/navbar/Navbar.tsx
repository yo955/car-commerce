/* Navbar.tsx */
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { AuthButtons } from './AuthButtons';
import { DropdownMenu } from './DropdownMenu';
import { LanguageSwitcher } from './LanguageSwitcher';
import { NavLink } from './NavLink';
import WorkingHours from './WorkingHours';
import { Menu, X } from 'lucide-react';
import { Input } from '@/components/ui/input';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-primary border-b shadow-sm">
      <div className="flex justify-between items-center mx-auto max-w-screen-xl p-4">
        {/* Logo */}
        <NavLink href="/" className="flex items-center gap-2">
          <Image
            src="https://flowbite.com/docs/images/logo.svg"
            alt="BidCars Logo"
            width={32}
            height={32}
            className="h-8 w-auto"
          />
          <span className="text-2xl font-semibold text-gray-900 dark:text-white">BidCars</span>
        </NavLink>

        {/* Search */}
        <div className="flex-1 max-w-2xl mx-auto">
          <Input type="search" placeholder="Search..." className="w-full bg-white rounded-full"  />
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={40} /> : <Menu size={40} />}
          </button>
        </div>


        {/* Desktop Content */}
        <div className="hidden lg:flex flex-1 lg:flex-0 justify-between items-center gap-4">


          <AuthButtons />
        </div>

      </div>

      {/* Secondary Nav - Desktop */}
      <div className="hidden lg:flex bg-secondary border-t">
        <div className="max-w-screen-xl mx-auto px-4 py-3 flex justify-between items-center w-full">
          <ul className="flex gap-6 text-sm font-medium text-white">
            <DropdownMenu
              label="Search & Bid"
              items={[
                { label: 'Search Cars', href: '/search' },
                { label: 'Live Auctions', href: '/auctions' },
                { label: 'My Bids', href: '/bids' },
              ]}
            />
            <NavLink href="/company">Delivery Times</NavLink>
            <DropdownMenu
              label="How it Works"
              items={[
                { label: 'Before purchase', href: '/search' },
                { label: 'After purchase', href: '/auctions' },
              ]}
            />
            <NavLink href="/features">Help</NavLink>
            <NavLink href="/features">About Us</NavLink>
            <NavLink href="/features">Contact</NavLink>
          </ul>

          <ul className="flex items-center gap-6">
            <WorkingHours />
            <DropdownMenu
              label="+24564546464"
              items={[
                { label: 'Facebook', href: '#' },
                { label: 'Instagram', href: '#' },
              ]}
            />
            <LanguageSwitcher />
          </ul>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden px-4 py-6 space-y-6 bg-gray-50 border-t text-sm text-gray-700 dark:text-white">
          <div className="space-y-2">
            <DropdownMenu
              label="Search & Bid"
              items={[
                { label: 'Search Cars', href: '/search' },
                { label: 'Live Auctions', href: '/auctions' },
                { label: 'My Bids', href: '/bids' },
              ]}
            />
            <NavLink href="/company">Delivery Times</NavLink>
            <DropdownMenu
              label="How it Works"
              items={[
                { label: 'Before purchase', href: '/search' },
                { label: 'After purchase', href: '/auctions' },
              ]}
            />
            <NavLink href="/features">Help</NavLink>
            <NavLink href="/features">About Us</NavLink>
            <NavLink href="/features">Contact</NavLink>
          </div>

          <div className="space-y-2">
            <div className='hidden lg:block'>
              <WorkingHours />
              <DropdownMenu
                label="+24564546464"
                items={[
                  { label: 'Facebook', href: '#' },
                  { label: 'Instagram', href: '#' },
                ]}
              />
            </div>
            <LanguageSwitcher />
            <AuthButtons />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
