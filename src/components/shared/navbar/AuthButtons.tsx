'use client';
import { LogIn, UserPlus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from '@/i18n/navigation';

export const AuthButtons = () => {
  return (
    <div className="flex items-center gap-3">
      <Link href="/login">
        <Button variant="outline" className="gap-2">
          <LogIn size={16} />
          Login
        </Button>
      </Link>

      <Link href="/signup">
        <Button className="gap-2">
          <UserPlus size={16} />
          Sign Up
        </Button>
      </Link>
    </div>
  );
};
