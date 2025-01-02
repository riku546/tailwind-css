import React from "react";
import FilterListIcon from "@mui/icons-material/FilterList";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import SwitchButton from "./SwitchButton";
import PlagiarismIcon from "@mui/icons-material/Plagiarism";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const MainArea = () => {
  const recommendedItems = [
    "PerplexityとAIはどのように異なるのですか？",
    "2024年の瞑想技法",
    "ペットの毛を掃除するのに最適な掃除機",
    "日本で人気の温泉スポット",
  ];
  return (
    <div class="md:h-screen lg:p-2 ">
      <div class="h-full md:grid md:grid-rows-pc bg-custom2 md:lg:rounded-xl">
        <div class="md:flex flex-col  items-center justify-center">
          <div class="space-y-4 w-full md:max-w-640px">
            <p class="text-3xl md:text-center">何を知りたいですか？</p>
            <div class="bg-custom1 px-5 pt-5 pb-2 rounded-lg border border-zinc-700">
              <textarea
                type="text"
                placeholder="何か質問してください"
                class="bg-custom1 w-full outline-none appearance-none resize-none"
              />
              <div class="flex justify-between items-center">
                <div class="flex space-x-3">
                  <div class="flex items-center space-x-1">
                    <FilterListIcon fontSize="small"></FilterListIcon>
                    <p class="text-sm">フォーカス</p>
                  </div>
                  <div class="flex items-center space-x-1">
                    <AddCircleOutlineIcon fontSize="small"></AddCircleOutlineIcon>
                    <p class="text-sm">添付</p>
                  </div>
                </div>
                <div class="flex items-center space-x-3">
                  <SwitchButton></SwitchButton>
                  <ArrowCircleRightIcon fontSize="large"></ArrowCircleRightIcon>
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-col w-full md:max-w-640px md:grid grid-cols-2 gap-2 mt-4">
            {recommendedItems.map((item) => (
              <div class="w-full flex items-center space-x-1 border border-zinc-800 rounded-xl py-2 px-1" key={item}>
                <div class="bg-custom1 p-1 rounded-lg">
                  <PlagiarismIcon></PlagiarismIcon>
                </div>
                <p class="text-sm break-words">{item}</p>
              </div>
            ))}
          </div>
        </div>
        <div class="hidden md:flex  md:items-center justify-center space-x-2 md:space-x-4 text-sm">
          <p>&pro;</p>
          <p>エンタープライズ</p>
          <p>店舗</p>
          <p>ブログ</p>
          <p>キャリア</p>
          <div class="flex items-center space-x-1">
            <p>Japanese(日本語)</p>
            <KeyboardArrowDownIcon fontSize="small"></KeyboardArrowDownIcon>
          </div>
        </div>
      </div>
      <button class="hidden md:block absolute  right-6 bottom-4 text-xl text-blue-500 bg-white px-3 py-1 rounded-full ">
        ?
      </button>
    </div>
  );
};

export default MainArea;
