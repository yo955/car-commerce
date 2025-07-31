'use client';
import React, { useState } from 'react';
import { DropdownMenu } from './DropdownMenu';
import { NavLink } from './NavLink';
import WorkingHoursDropdown from './WorkingHours';
import { LanguageSwitcher } from './LanguageSwitcher';
import { AuthButtons } from './AuthButtons';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import clsx from 'clsx';

const MobileMenu = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Mobile Toggle */}
      <div className="lg:hidden z-50 relative p-2">
        <Button
          size="icon"
          variant="ghost"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="transition-transform duration-300 ease-in-out bg-white"
        >
          <span
            className={clsx(
              'absolute transition-all duration-300',
              mobileMenuOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
            )}
          >
            <Menu size={40} />
          </span>
          <span
            className={clsx(
              'absolute transition-all duration-300',
              mobileMenuOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
            )}
          >
            <X size={40} />
          </span>
        </Button>
      </div>

      {/* Mobile Menu */}
      <div
        className={clsx(
          'fixed top-20 left-0 w-full h-[calc(100vh-80px)] bg-primary z-40 overflow-y-auto transform transition-transform duration-500 ease-in-out px-6 py-6 space-y-6 text-sm text-gray-700 dark:text-white lg:hidden',
          mobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
        )}
      >
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
              { label: 'Before purchase', href: '/Before-purchase' },
              { label: 'After purchase', href: '/After-purchase' },
            ]}
          />
          <div className="flex flex-col items-start space-y-2 ">
            <NavLink href="/features">Help</NavLink>
            <NavLink href="/about">About Us</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </div>
        </div>

        <div className="space-y-2">
          <LanguageSwitcher />
          <div className="flex flex-col gap-2">
            <AuthButtons />
          </div>
        </div>

      </div>
    </>
  );
};

export default MobileMenu;
