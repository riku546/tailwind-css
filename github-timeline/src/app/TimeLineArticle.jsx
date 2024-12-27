import FaceIcon from "@mui/icons-material/Face";

import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

import StarOutlineIcon from "@mui/icons-material/StarOutline";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const TimeLineArticle = ({ timeLineData }) => {
  return (
    <div class="border-2 border-gray-400 p-3 rounded-xl bg-slate-200">
      <div class="flex justify-between items-center">
        <div>
          <div class="flex items-center space-x-2">
            <FaceIcon fontSize="large" />
            <p class="font-bold text-lg">{timeLineData.userName}</p>
            <p class="text-sm text-gray-400">{timeLineData.actionType}</p>
          </div>
          <p>{timeLineData.time}</p>
        </div>
        <MoreHorizIcon />
      </div>

      <div class="flex justify-between space-y-2 bg-slate-300 p-4 rounded">
        <div class="space-y-2 w-full">
          <div class="w-full flex justify-between items-center">
            <div className="flex items-center space-x-1">
              <FaceIcon fontSize="small" />
              <p>{timeLineData.repositoryName}</p>
            </div>
            <div class="flex space-x-2 items-center border-2 border-gray-400 rounded-xl px-2 py-1 ">
              <div class="flex items-center">
                <StarOutlineIcon fontSize="small" />
                <p>Star</p>
              </div>
              <ArrowDropDownIcon fontSize="small" />
            </div>
          </div>
          <p>{timeLineData.description}</p>
          <div class="flex space-x-3">
            <p>{timeLineData.language}</p>
            <div class="flex items-center space-x-1">
              <StarOutlineIcon fontSize="small" />
              <p>{timeLineData.starCount}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default TimeLineArticle;