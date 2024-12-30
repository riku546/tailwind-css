import React from "react";
import SavedSearchIcon from "@mui/icons-material/SavedSearch";
import BlurCircularIcon from "@mui/icons-material/BlurCircular";
import WorkspacesIcon from "@mui/icons-material/Workspaces";
import HistoryIcon from "@mui/icons-material/History";
import PersonIcon from "@mui/icons-material/Person";

const BottomNav = () => {
  return (
    <div>
      <div class="w-full bg-custom1  flex justify-around items-center p-2">
        <div class="flex flex-col items-center">
          <SavedSearchIcon></SavedSearchIcon>
          <p class="text-sm">ホーム</p>
        </div>
        <div class="flex flex-col items-center">
          <BlurCircularIcon></BlurCircularIcon>
          <p class="text-sm">発見</p>
        </div>
        <div class="flex flex-col items-center">
          <WorkspacesIcon></WorkspacesIcon>
          <p class="text-sm">スペース</p>
        </div>
        <div class="flex flex-col items-center">
          <HistoryIcon></HistoryIcon>
          <p class="text-sm">ライブラリー</p>
        </div>
        <div class="flex flex-col items-center">
          <PersonIcon></PersonIcon>
          <p class="text-sm">サインイン</p>
        </div>
      </div>
    </div>
  );
};

export default BottomNav;
