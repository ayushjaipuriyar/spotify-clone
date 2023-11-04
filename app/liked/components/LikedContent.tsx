'use client';

import { useRouter } from 'next/router';
import { useEffect } from 'react';

import LikeButton from '@/components/LikedButton';
import MediaItem from '@/components/MediaItem';
import useOnPlay from '@/hooks/useOnPlay';
import { useUser } from '@/hooks/useUser';
import { Song } from '@/types';

interface LikedContentProps {
  songs: Song[];
}
const LikedContent: React.FC<LikedContentProps> = ({ songs }) => {
  const onPlay = useOnPlay(songs);
  const router = useRouter();
  const { isLoading, user } = useUser();
  useEffect(() => {
    if (!isLoading && !user) {
      router.replace('/');
    }
  }, [isLoading, user, router]);
  if (songs.length === 0) {
    return (
      <div className='flex w-full flex-col gap-y-2 px-6 text-neutral-400'>
        No liked songs.
      </div>
    );
  }
  return (
    <div className='fledx-col flex w-full gap-y-2 p-6'>
      {songs.map((song) => (
        <div
          key={song.id}
          className='flex w-full items-center gap-x-4'
        >
          <div className='flex-1'>
            <MediaItem
              onClick={(id: string) => onPlay(id)}
              data={song}
            />
          </div>
          <LikeButton songId={song.id} />
        </div>
      ))}
    </div>
  );
};

export default LikedContent;
