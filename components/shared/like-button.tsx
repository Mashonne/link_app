"use client";

import { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { usePathname } from "next/navigation";

import { addLikeToThread } from "@/lib/actions/thread.actions";
import { formatLikes} from "@/lib/utils";

interface LikeButtonProps{
    id: string;
    userId: string;
    isLiked: boolean;
    likeCount: number
}

const LikeButton: React.FC<LikeButtonProps> = ({
    id,
    userId,
    isLiked,
    likeCount 
}) => {
  const [liked, setLiked] = useState(isLiked);
  const pathname = usePathname();

  const onClick = async () => {
    await addLikeToThread(id, userId, pathname);
    setLiked(!liked)
  }

  return (
    <div onClick={onClick}>
      {liked ? (
        <div className="flex items-center gap-1">
          <AiFillHeart
              size={20}
              className="cursor-pointer text-red-500"
          />
          <p className="text-[12px] text-neutral-300">{formatLikes(likeCount)}</p>
        </div>
      ) : (
        <div className="flex items-center gap-0.5">
          <AiOutlineHeart
              size={20}
              className="cursor-pointer text-neutral-500"
          />
          <p className="text-[12px] text-neutral-300">{formatLikes(likeCount)}</p>
        </div>
      )}
    </div>
  );
};

export default LikeButton;