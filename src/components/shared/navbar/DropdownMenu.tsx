'use client';
import { ChevronDown } from 'lucide-react';
import { NavLink } from './NavLink';

interface DropdownMenuProps {
  label: string;
  items: {
    label: string;
    href: string;
  }[];
}

export const DropdownMenu = ({ label, items }: DropdownMenuProps) => {
  return (
    <li className="relative group list-none">
      <button className="hover:underline flex items-center gap-1 text-sm font-medium text-white">
        {label}
        <ChevronDown className="w-3 h-3 mt-0.5" />
      </button>
      <div className="absolute left-0 mt-2 w-40 bg-white border rounded-md shadow-lg opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transform scale-95 group-hover:scale-100 transition-all duration-200 z-50">
        <ul className="py-1 text-sm text-white">
          {items.map((item) => (
            <li key={item.href}>
              <NavLink href={item.href} className="block px-4 py-2 text-black hover:bg-gray-800 ">
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
};
