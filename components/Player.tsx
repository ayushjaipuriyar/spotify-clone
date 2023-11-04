'use client';

import useGetSongsById from '@/hooks/useGetSongsById';
import useLoadSongUrl from '@/hooks/useLoadSongUrl';
import usePlayer from '@/hooks/usePlayer';

import PlayerContent from './PlayerContent';

const Player = () => {
  const player = usePlayer();
  const { song } = useGetSongsById(player.activeId);
  const songUrl = useLoadSongUrl(song!);
  if (!song || !songUrl || !player.activeId) return null;

  return (
    <div className='fixed bottom-0 h-[80px] w-full bg-black px-4 py-2'>
      <PlayerContent
        key={songUrl}
        song={song}
        songUrl={songUrl}
      />
    </div>
  );
};

export default Player;
