import React from "react";
import Image from "next/image";
import perplexityLogo from "../../perplexityLogo.png";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SavedSearchIcon from "@mui/icons-material/SavedSearch";
import BlurCircularIcon from "@mui/icons-material/BlurCircular";
import WorkspacesIcon from "@mui/icons-material/Workspaces";
import HistoryIcon from "@mui/icons-material/History";
const SideNav = () => {
  return (
    <div class="px-4 py-6 flex flex-col justify-between h-screen bg-custom1">
      <div class="flex  flex-col space-y-5">
        <div class="w-40 sm:w-44 flex items-center space-x-3">
          <Image src={perplexityLogo} />
          <ArrowBackIcon fontSize="small"></ArrowBackIcon>
        </div>
        <div class="flex items-center justify-between bg-slate-900 border border-slate-700 px-4 py-2  rounded-3xl hover:border-blue-500 hover:cursor-pointer">
          <p class="mr-3 text-xs">新しいスレッド</p>
          <div class="flex">
            <p class="text-sm text-slate-400 px-2 rounded-xl  border  border-slate-700">
              Ctrl
            </p>
            <p class="text-sm text-slate-400 px-2 border rounded-lg border-slate-700">
              I
            </p>
          </div>
        </div>
        <ul class="flex flex-col ">
          <li class="flex space-x-1 px-2 py-3 rounded hover:bg-gray-600 cursor-pointer">
            <SavedSearchIcon></SavedSearchIcon>
            <p>ホーム</p>
          </li>
          <li class="flex space-x-1 px-2 py-3 rounded hover:bg-gray-600 cursor-pointer">
            <BlurCircularIcon></BlurCircularIcon>
            <p>発見</p>
          </li>
          <li class="flex space-x-1 px-2 py-3 rounded hover:bg-gray-600 cursor-pointer">
            <WorkspacesIcon></WorkspacesIcon>
            <p>スペース</p>
          </li>
          <li class="flex space-x-1 px-2 py-3 rounded hover:bg-gray-600 cursor-pointer">
            <HistoryIcon></HistoryIcon>
            <p>ライブラリ</p>
          </li>
        </ul>
      </div>
      <div class="flex flex-col space-y-2">
        <button class="text-black text-md bg-sky-500 py-3 rounded-lg hover:opacity-80">
          新規登録
        </button>
        <button class="text-md bg-slate-600 py-3 rounded-lg hover:opacity-80">ログイン</button>
      </div>
    </div>
  );
};

export default SideNav;
