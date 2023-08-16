"use client";

import { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

interface LikeButtonProps{
    id: string;
}

const LikeButton: React.FC<LikeButtonProps> = ({
    id, 
}) => {
  const [liked, setLiked] = useState(false);

  return (
    <div onClick={() => setLiked(!liked)}>
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
