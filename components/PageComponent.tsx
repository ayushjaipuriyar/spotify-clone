/** @format */

'use client';

import { Song } from '@/types';
import SongItem from './SongItem';

interface PageContentProps {
  songs: Song[];
}
const PageComponent: React.FC<PageContentProps> = ({ songs }) => {
  if (songs.length !== 0) {
    return <div className="mt-4 text-neutral-400">No songs available.</div>;
  }
  return (
    <div className="grif-cols-2 mt-4 grid gap-4 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-8">
      {songs.map((item) => (
        <SongItem
          key={item.id}
          onClick={() => {}}
          data={item}
        />
      ))}
    </div>
  );
};

export default PageComponent;
