import React, { use } from "react";
import SearchIcon from "@mui/icons-material/Search";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Face } from "@mui/icons-material";

const RightSideBar = () => {
  const trendItems = [
    {
      trendCategory: "スポーツ・トレンド",
      trendKeyword: "オリンピック",
      postCount: "8,000",
    },
    {
      trendCategory: "エンタメ・トレンド",
      trendKeyword: "ドラマ",
      postCount: "2,000",
    },
    {
      trendCategory: "ニュース・トレンド",
      trendKeyword: "政治",
      postCount: "1,000",
    },
  ];

  const userItems = [
    { name: "ユーザー1", id: "@user1" },
    { name: "ユーザー2", id: "@user2" },
    { name: "ユーザー3", id: "@user3" },
  ];

  return (
    <section class="max-w-sm fixed flex flex-col space-y-4 justify-start px-10 py-2">
      <div>
        <div class="flex items-center px-3 py-2 bg-slate-800 rounded-full space-x-3">
          <SearchIcon></SearchIcon>
          <input
            type="text"
            placeholder="検索"
            class="outline-none bg-slate-800"
          />
        </div>
      </div>
      <div class="border border-slate-800 p-4 rounded-xl space-y-2">
        <p class="text-xl font-bold">プレミアムを今すぐ無料で試す</p>
        <p class="text-sm break-all">
          プレミアムで表示される広告を減らし、強力なツールを使うことによって、さらに快適に利用しましょう。
        </p>
        <button class="flex justify-center px-3 py-2 bg-slate-100 text-black rounded-full">
          14日間の無料トライアルを開始
        </button>
      </div>
      <div class="border border-slate-800 p-4 rounded-xl space-y-4">
        <p class="text-xl font-bold">「いま」を見つけよう</p>
        <div class="space-y-5">
          {trendItems.map((item) => (
            <div class="flex justify-between s">
              <div class="space-y-1">
                <p class="text-xs font-thin text-slate-700">
                  {item.trendCategory}
                </p>
                <p class="text-md font-bold">{item.trendKeyword}</p>
                <p class="text-xs font-thin text-slate-700">
                  {item.postCount}件の投稿
                </p>
              </div>
              <div>
                <MoreHorizIcon></MoreHorizIcon>
              </div>
            </div>
          ))}
        </div>
        <p class="text-blue-500">さらに表示</p>
      </div>
      <div class="border border-slate-800 p-4 rounded-xl space-y-4">
        <p class="text-xl font-bold">おすすめのユーザー</p>
        <div class="space-y-4">
          {userItems.map((userItem) => (
            <div class="flex justify-between">
              <div class="flex space-x-2 ">
                <Face fontSize="large"></Face>
                <div>
                  <p class="text-md font-bold">{userItem.name}</p>
                  <p class="text-xs font-thin text-slate-700">{userItem.id}</p>
                </div>
              </div>
              <div>
                <button class="px-3 py-1 bg-slate-100 text-black rounded-full">
                  フォロー
                </button>
              </div>
            </div>
          ))}
        </div>
        <p class="text-blue-500">さらに表示</p>
      </div>
    </section>
  );
};

export default RightSideBar;
