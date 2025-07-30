'use client';
import { Button } from '@/components/ui/button';

export const LanguageSwitcher = () => {
  return (
    <div className="relative group inline-block text-left">
      <Button variant="ghost" className="text-sm gap-2">
        🌐 English
      </Button>
      <div className="absolute left-0 mt-2 w-48 origin-top-left scale-95 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 bg-white border rounded-md shadow-lg z-50">
        <ul className="py-1">
          <li><a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">English</a></li>
          <li><a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Deutsch</a></li>
          <li><a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Italiano</a></li>
        </ul>
      </div>
    </div>
  );
};
