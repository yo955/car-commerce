'use client';
import GermanyFlag from '@/components/icons/GermanyFlag';
import ItalianFlag from '@/components/icons/ItalianFlag';
import IconUSFlag from '@/components/icons/USFlag';
import { Button } from '@/components/ui/button';
import clsx from 'clsx';
import { ChevronDown } from 'lucide-react';

export const LanguageSwitcher = () => {
  return (
    <div className="relative group inline-block text-left">
      <Button variant="ghost" className="text-sm text-white gap-2 hover:bg-primary">
        <IconUSFlag size={40} />
        English
        <ChevronDown
          size={18}
          className={clsx(
            'transition-transform ml-auto text-[#677588]'
          )} />
      </Button>
      <div className="absolute left-0 mt-2 w-48 origin-top-left scale-95 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 bg-primary text-white border rounded-md shadow-lg z-50">
        <ul className="py-1">
          <li><a href="#" className="flex items-center px-4 py-2 text-sm text-gray-50  hover:bg-secondary"><IconUSFlag size={20} />English</a></li>
          <li><a href="#" className="flex items-center px-4 py-2 text-sm text-gray-50 hover:bg-secondary"><GermanyFlag />Deutsch</a></li>
          <li><a href="#" className="flex items-center px-4 py-2 text-sm text-gray-50  hover:bg-secondary"><ItalianFlag />Italiano</a></li>
        </ul>
      </div>
    </div>
  );
};
