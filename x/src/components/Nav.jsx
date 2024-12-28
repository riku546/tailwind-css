import React from "react";
import XIcon from "@mui/icons-material/X";
import HouseIcon from "@mui/icons-material/House";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import EmailIcon from "@mui/icons-material/Email";
import FingerprintIcon from "@mui/icons-material/Fingerprint";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import WorkIcon from "@mui/icons-material/Work";
import GroupIcon from "@mui/icons-material/Group";
import MosqueIcon from "@mui/icons-material/Mosque";
import PersonIcon from "@mui/icons-material/Person";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import EditIcon from "@mui/icons-material/Edit";
import AndroidIcon from "@mui/icons-material/Android";

const Nav = () => {
  const navItems = [
    { icon: <XIcon fontSize="large"></XIcon>, text: "" },
    { icon: <HouseIcon fontSize="large"></HouseIcon>, text: "ホーム" },
    { icon: <SearchIcon fontSize="large"></SearchIcon>, text: "話題を検索" },
    {
      icon: <NotificationsIcon fontSize="large"></NotificationsIcon>,
      text: "通知",
    },
    { icon: <EmailIcon fontSize="large"></EmailIcon>, text: "メッセージ" },
    {
      icon: <FingerprintIcon fontSize="large"></FingerprintIcon>,
      text: "Grok",
    },
    {
      icon: <BookmarkIcon fontSize="large"></BookmarkIcon>,
      text: "ブックマーク",
    },
    { icon: <WorkIcon fontSize="large"></WorkIcon>, text: "求人" },
    { icon: <GroupIcon fontSize="large"></GroupIcon>, text: "コミュニティ" },
    { icon: <XIcon fontSize="large"></XIcon>, text: "プレミアム" },
    { icon: <MosqueIcon fontSize="large"></MosqueIcon>, text: "認証済み組織" },
    { icon: <PersonIcon fontSize="large"></PersonIcon>, text: "プロフィール" },
    {
      icon: <MoreHorizIcon fontSize="large"></MoreHorizIcon>,
      text: "もっと見る",
    },
  ];

  return (
    <nav class="fixed flex justify-center h-screen  px-4 py-2 ">
      <ul>
        <div class="space-y-4">
          {navItems.map((item, index) => (
            <li
              class="flex space-x-4 items-center hover:opacity-50 hover:cursor-pointer"
              key={item.text}
            >
              <div class="p-1">{item.icon}</div>
              <p class="text-xl hidden xl:block">{item.text}</p>
            </li>
          ))}
        </div>
        <li class="flex bg-slate-800 rounded-full p-2 mt-3 hover:opacity-50 hover:cursor-pointer">
          <div class="block xl:hidden">
            <EditIcon fontSize="large"></EditIcon>
          </div>
          <p class="text-xl hidden xl:block xl:text-center xl:w-full">
            ポストする
          </p>
        </li>
        <li class="flex space-x-4 mt-10 p-1 hover:opacity-50 hover:cursor-pointer">
          <AndroidIcon fontSize="large"></AndroidIcon>
          <div class="hidden  space-x-4 xl:flex">
            <p class="text-xl">riku</p>
            <MoreHorizIcon></MoreHorizIcon>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
