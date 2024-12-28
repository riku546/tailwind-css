import { Face } from "@mui/icons-material";
import React from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import QuickreplyIcon from "@mui/icons-material/Quickreply";
import ShareIcon from "@mui/icons-material/Share";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";

const Post = ({ date, postText }) => {
  return (
    <div class="px-6 py-3 border-b border-zinc-800">
      <div class="flex space-x-3  justify-between items-center h-full">
        <div class="flex space-x-3">
          <Face fontSize="large"></Face>
          <div class="flex space-x-3 flex-col">
            <div class="flex space-x-2">
              <p>ユーザー名</p>
              <p>{date}</p>
            </div>
            <p class="break-all">{postText}</p>
          </div>
        </div>
        <div class="h-full flex justify-start">
          <MoreHorizIcon></MoreHorizIcon>
        </div>
      </div>
      <div class="flex justify-between items-center mt-4">
        <ul class="flex justify-around space-x-3">
          <li class="flex space-x-2">
            <p>10</p> <QuickreplyIcon></QuickreplyIcon>
          </li>
          <li class="flex">
            <p>10</p>
            <ShareIcon></ShareIcon>
          </li>
          <li class="flex">
            <p>10</p>
            <FavoriteBorderIcon></FavoriteBorderIcon>
          </li>
          <li class="flex">
            <p>10</p>
            <EqualizerIcon></EqualizerIcon>
          </li>
        </ul>
        <div class="flex">
          <BookmarkIcon></BookmarkIcon>
          <DriveFolderUploadIcon></DriveFolderUploadIcon>
        </div>
      </div>
    </div>
  );
};

export default Post;
