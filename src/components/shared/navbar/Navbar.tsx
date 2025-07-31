'use client';
import { AuthButtons } from './AuthButtons';
import { DropdownMenu } from './DropdownMenu';
import { LanguageSwitcher } from './LanguageSwitcher';
import { NavLink } from './NavLink';
import WorkingHours from './WorkingHours';
import { Input } from '@/components/ui/input';
import MobileMenu from './MobileMenu';
import Logo from './Logo';

const Navbar = () => {
  return (
    <nav className="bg-primary border-b shadow-sm">
      <div className="flex justify-between items-center mx-auto max-w-screen-xl p-4">
        {/* Logo */}
        <Logo />

        {/* Search */}
        <div className="flex-1 max-w-2xl mx-auto">
          <Input type="search" placeholder="Search..." className="w-full bg-white rounded-full" />
        </div>

        {/* AuthButtons */}
        <div className="hidden lg:flex flex-1 lg:flex-0 justify-between items-center gap-4">
          <AuthButtons />
        </div>

        {/* MobileMenu */}
        <MobileMenu />

      </div>

      {/* Secondary Nav - Desktop */}
      <div className="hidden lg:flex bg-secondary border-t">
        <div className="max-w-screen-xl mx-auto px-4 py-1 flex justify-between items-center w-full">
          <ul className="flex items-center  text-sm font-medium text-white">
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
            <div className='hidden xl:flex items-center'>
              <WorkingHours />
              <DropdownMenu
                label="+24564546464"
                items={[
                  { label: 'Facebook', href: '/Facebook' },
                  { label: 'Instagram', href: 'Instagram' },
                ]}
              />
            </div>
            <LanguageSwitcher />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
