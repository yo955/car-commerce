'use client';
import { Link } from '@/i18n/navigation';
import { cn } from '@/lib/utils';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export const NavLink = ({ href, children, className }: NavLinkProps) => {
  return (
    <Link
      href={href}
      className={cn('hover:underline text-sm font-medium text-white', className)}
    >
      {children}
    </Link>
  );
};
