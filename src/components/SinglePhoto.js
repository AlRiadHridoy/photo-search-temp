import React from "react";
import { useGlobalContext } from "../context/useGlobalContext";
import {Link} from "react-router-dom"

function SinglePhoto() {
  const { singleImg } = useGlobalContext();
  const {
    webformatURL: img,
    user,
    type,
    userImageURL: userImg,
    likes,
    id,
    comments,
    views,
    downloads,
    tags,
    largeImageURL,
  } = singleImg;
  console.log(id);

  return (
    <div className="container z-100 flex flex-col justify-center items-center text-slate-700 dark:text-slate-900">
      <div className="img_content flex flex-col md:flex-row gap-2 rounded-lg bg-slate-400/50 backdrop-blur-xl p-4">
        <div className="img">
          <img
            className="rounded-md max-h-[20rem] max-w-[35rem] w-full"
            src={img}
            alt={type}
          />
        </div>

        <div className="info p-5 font-medium text-xl">
          <div className="user_img mb-3">
            <img
              className=" w-14 rounded-xl md:w-20 mb-2"
              src={userImg}
              alt={type}
            />
            <span>Name: {user}</span>
          </div>
          <div className="content flex flex-col text-lg">
            <span>
              Likes: <span className="font-semibold"> {likes}</span>
            </span>
            <span>
              Comments: <span className="font-semibold"> {comments}</span>
            </span>
            <span>
              Views: <span className="font-semibold"> {views}</span>
            </span>
            <span>
              Downloads: <span className="font-semibold"> {downloads}</span>
            </span>
            <span>
              Tags: <span className="font-semibold"> {tags}</span>
            </span>
          </div>

          <div className="download mt-8">
            <a
              href={largeImageURL}
              className=" bg-pink-700 px-4 py-2 rounded-md text-slate-100"
              download
              target="_blank"
              rel="noreferrer"
            >
              Download
            </a>
          </div>
        </div>
      </div>

      <button className="back_btn font-semibold text-slate-100 mt-5 px-4 py-2 rounded-md bg-teal-500 dark:bg-teal-500"><Link to="/">Back Home</Link></button>
    </div>
  );
}

//pixabay.com/photos/desk-laptop-notebook-pen-workspace-593327/

export default SinglePhoto;
