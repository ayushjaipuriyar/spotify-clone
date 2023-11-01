import useLoadImage from '@/hooks/useLoadImage';
import { Song } from '@/types';
import Image from 'next/image';

interface MediaItemProps {
  data: Song;
  onClick?: (id: string) => void;
}
const MediaItem: React.FC<MediaItemProps> = ({ data, onClick }) => {
  const imageUrl = useLoadImage(data);
  const handleClick = () => {
    if (onClick) {
      return onClick(data.id);
    }
    return;
  };
  return (
    <div
      className="p2 flex w-full cursor-pointer items-center gap-x-3 rounded-md hover:bg-neutral-800/50"
      onClick={handleClick}
    >
      <div className="relative min-h-[48px] min-w-[48px] overflow-hidden rounded-md">
        <Image
          fill
          src={imageUrl || '/images/liked.png'}
          alt="Media item"
          className="object-cover"
        />
        <p className="truncate text-white">{data.title}</p>
        <p className="truncate text-sm text-neutral-400">{data.author}</p>
      </div>
    </div>
  );
};

export default MediaItem;
