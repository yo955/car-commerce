'use client';
import { Button } from '@/components/ui/button';
import { Link } from '@/i18n/navigation';
import { cn } from '@/lib/utils';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export const NavLink = ({ href, children, className }: NavLinkProps) => {
  return (
    <Button asChild variant='ghost'>
      <Link
        href={href}
        className={cn('hover:bg-primary hover:text-white h-full text-sm font-medium text-white', className)}
      >
        {children}
      </Link>

    </Button >
  );
};
