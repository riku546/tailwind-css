import React from "react";
import AndroidIcon from "@mui/icons-material/Android";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import GifBoxIcon from "@mui/icons-material/GifBox";
import AddReactionIcon from "@mui/icons-material/AddReaction";
import HowToVoteIcon from "@mui/icons-material/HowToVote";
import EditCalendarIcon from "@mui/icons-material/EditCalendar";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import FingerprintIcon from "@mui/icons-material/Fingerprint";
import Post from "./Post";
const TimeLineContent = () => {
  const postTextList = [
    { date: "2024", postText: "test" },
    { date: "2024", postText: "test" },
    { date: "2024", postText: "test" },
    { date: "2024", postText: "test" },
    { date: "2024", postText: "test" },
    { date: "2024", postText: "test" },
    { date: "2024", postText: "test" },
    { date: "2024", postText: "test" },
    { date: "2024", postText: "test" },
    { date: "2024", postText: "test" },
    { date: "2024", postText: "test" },
    { date: "2024", postText: "test" },
    { date: "2024", postText: "test" },
    { date: "2024", postText: "test" },
    { date: "2024", postText: "test" },
    { date: "2024", postText: "test" },
    { date: "2024", postText: "test" },
    { date: "2024", postText: "test" },
    { date: "2024", postText: "test" },
    { date: "2024", postText: "test" },
    { date: "2024", postText: "test" },
  ];
  return (
    <div>
      <div class="flex justify-around border-b border-zinc-800 py-3">
        <p class="text-lg font-bold">おすすめ</p>
        <p class="text-lg font-bold border-b-2 pb-1  border-blue-600">
          フォロー中
        </p>
      </div>
      <div>
        <div class="px-6 py-3 border-b border-zinc-800">
          <div class="flex space-x-3 min-h-24">
            <div>
              <AndroidIcon fontSize="large"></AndroidIcon>
            </div>
            <textarea
              class="w-full bg-transparent appearance-none outline-none resize-none"
              placeholder="いまどうしている？"
            ></textarea>
          </div>
          <div class="flex justify-between items-center">
            <div class="flex space-x-2">
              <InsertPhotoIcon
                fontSize="small"
                color="primary"
              ></InsertPhotoIcon>
              <GifBoxIcon fontSize="small" color="primary"></GifBoxIcon>
              <FingerprintIcon
                fontSize="small"
                color="primary"
              ></FingerprintIcon>
              <div class="hidden sm:flex items-center space-x-2">
                <HowToVoteIcon fontSize="small" color="primary"></HowToVoteIcon>
                <AddReactionIcon
                  fontSize="small"
                  color="primary"
                ></AddReactionIcon>
                <EditCalendarIcon
                  fontSize="small"
                  color="primary"
                ></EditCalendarIcon>
                <AddLocationAltIcon
                  fontSize="small"
                  color="primary"
                ></AddLocationAltIcon>
              </div>
            </div>
            <button class="bg-slate-700  px-4 py-2 rounded-full">
              ポストする
            </button>
          </div>
        </div>
        {postTextList.map((postText) => (
          <Post date={postText.date} postText={postText.postText} />
        ))}
      </div>
    </div>
  );
};

export default TimeLineContent;
