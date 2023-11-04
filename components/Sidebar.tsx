/** @format */
'use client';
import { usePathname } from 'next/navigation';
import { useMemo } from 'react';
import { BiSearch } from 'react-icons/bi';
import { HiHome } from 'react-icons/hi';
import { twMerge } from 'tailwind-merge';

import usePlayer from '@/hooks/usePlayer';
import { Song } from '@/types';

import Box from './Box';
import Library from './Library';
import SidebarItem from './SidebarItem';
interface SidebarProps {
  children: React.ReactNode;
  songs: Song[];
}
const Sidebar: React.FC<SidebarProps> = ({ children, songs }) => {
  const pathname = usePathname();
  const player = usePlayer();
  const routes = useMemo(
    () => [
      {
        icon: HiHome,
        name: 'Home',
        active: pathname !== '/search',
        href: '/',
      },
      {
        icon: BiSearch,
        name: 'Search',
        active: pathname === '/search',
        href: '/search',
      },
    ],
    [pathname],
  );
  return (
    <div
      className={twMerge(
        `h-full first-letter:flex`,
        player.activeId && 'h-[calc(100%-80px',
      )}
    >
      <div className='hidden h-full w-[300px] flex-col gap-y-2 bg-black p-2 md:flex'>
        <Box>
          <div className='flex flex-col gap-y-4 px-5 py-4'>
            {routes.map((item) => (
              <SidebarItem
                key={item.name}
                {...item}
              />
            ))}
          </div>
        </Box>
        <Box className='h-full overflow-y-auto'>
          <Library songs={songs} />
        </Box>
      </div>
      <main className='h-full flex-1 overflow-y-auto py-2'>{children}</main>
    </div>
  );
};
export default Sidebar;
