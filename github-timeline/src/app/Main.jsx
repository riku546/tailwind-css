import CustomInput from "./CustomInput";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import BugReportIcon from "@mui/icons-material/BugReport";
import FilterListIcon from "@mui/icons-material/FilterList";

import TimeLineArticle from "./TimeLineArticle";

const Main = ({ timeLineDataList }) => {
  return (
    <div class="w-full mt-24 space-y-5 p-7 lg:p-0">
      <CustomInput />
      <div class="flex space-x-4">
        <div class="flex justify-center items-center space-x-1 border-2 px-3 py-2 rounded-xl hover:opacity-80 hover:cursor-pointer">
          <AccountTreeIcon />
          <p class="text-sm">Recent Commits in torvalds/linux</p>
        </div>
        <div class="hidden sm:flex justify-center items-center space-x-1 border-2 px-3 py-2 rounded-xl hover:opacity-80 hover:cursor-pointer">
          <LocalOfferIcon />
          <p class="text-sm">Latest nodejs/node release</p>
        </div>
        <div class="hidden sm:flex justify-center items-center space-x-1 border-2 px-3 py-2 rounded-xl hover:opacity-80 hover:cursor-pointer">
          <BugReportIcon />
          <p class="text-sm">Recent bugs in primer/react</p>
        </div>
      </div>

      <div class="flex justify-between items-center">
        <p class="text-2xl font-bold">Home</p>
        <button className="flex justify-center items-center space-x-1 border-2 px-2 py-1 rounded-lg bg-slate-200">
          <FilterListIcon />
          <p>Filter</p>
        </button>
      </div>
      {timeLineDataList.map((timeLineData) => (
        <TimeLineArticle timeLineData={timeLineData} />
      ))}
    </div>
  );
};

export default Main;