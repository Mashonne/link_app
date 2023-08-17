"use client";

import { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { usePathname } from "next/navigation";

import { addLikeToThread } from "@/lib/actions/thread.actions";

interface LikeButtonProps{
    id: string;
    userId: string;
    isLiked: boolean
}

const LikeButton: React.FC<LikeButtonProps> = ({
    id,
    userId,
    isLiked 
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
        <AiFillHeart 
            size={20} 
            className="cursor-pointer text-red-500" 
        />
      ) : (
        <AiOutlineHeart 
            size={20} 
            className="cursor-pointer text-neutral-500" 
        />
      )}
    </div>
  );
};

export default LikeButton;