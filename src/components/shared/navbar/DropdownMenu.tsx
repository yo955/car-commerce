'use client';

import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import clsx from 'clsx';
import { Button } from '@/components/ui/button';

interface DropdownMenuProps {
  label: string;
  items: { label: string; href: string }[];
}

export const DropdownMenu = ({ label, items }: DropdownMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024); // md breakpoint
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div
      className={clsx(
        'relative border-r border-gray-600',
        isMobile ? '' : 'group'
      )}
    >
      <Button
        onClick={() => isMobile && setIsOpen(!isOpen)}
        variant='ghost'
        className="flex items-center  text-white hover:text-white gap-2 justify-between w-full text-left hover:bg-primary"
      >
        <span>{label}</span>
        <ChevronDown
          size={18}
          className={clsx(
            'transition-transform ml-auto text-[#677588]',
            isOpen && 'rotate-180'
          )}
        />
      </Button>

      {/* Dropdown List */}
      <div
        className={clsx(
          'mt-1 pl-4 space-y-1 text-md text-white',
          isMobile
            ? isOpen ? 'block' : 'hidden'
            : 'hidden group-hover:block absolute bg-primary w-[120%]  z-20 shadow-md p-2 rounded'
        )}
      >
        {items.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="block px-2 py-1 text-white"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
};
