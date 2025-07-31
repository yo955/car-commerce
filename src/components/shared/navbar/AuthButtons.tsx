'use client';
import { LogIn, UserPlus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from '@/i18n/navigation';

export const AuthButtons = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full items-center gap-3">
      <Link href="/login" className="w-full lg:w-auto">
        <Button
          variant="secondary"
          size="lg"
          className="w-full lg:w-auto gap-2 cursor-pointer text-white rounded-full hover:bg-black/55"
        >
          <LogIn size={18} />
          Log In
        </Button>
      </Link>

      <Link href="/signup" className="w-full lg:w-auto">
        <Button
          size="lg"
          className="w-full lg:w-auto gap-2 bg-[#249af3] cursor-pointer text-white rounded-full hover:bg-[#2499f3c3]"
        >
          <UserPlus size={18} />
          Sign Up
        </Button>
      </Link>
    </div>
  );
};
