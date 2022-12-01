import React from 'react'
import { BsFillCameraFill } from "react-icons/bs";
import { AiFillLike } from "react-icons/ai";

function Photo({ item }) {
  const { webformatURL: img, user, type, userImageURL: userImg, likes } = item;
  return (
    <div className="img_container flex flex-col relative duration-300 overflow-hidden rounded-md">
      <img
        src={img}
        alt={type}
        className="w-full min-h-[14rem] max-h-[14rem] sm:min-h-[17rem] sm:max-h-[17rem]"
      />
      <div className="user_info absolute bottom-[-100%] left-0 right-0 backdrop-blur-2xl bg-white/30 text-slate-300 dark:text-slate-200 rounded-sm p-2 flex items-center gap-2 justify-between">
        <div className="">
          <div className="flex gap-2 items-center">
            <BsFillCameraFill /> {user}
          </div>

          <div className="likes flex gap-2 items-center">
            <AiFillLike /> {likes}
          </div>
        </div>
        {userImg && (
          <div className="user_img">
            <img src={userImg} alt="author_img" className="w-10 rounded-full" />
          </div>
        )}
      </div>
    </div>
  );
}

export default Photo