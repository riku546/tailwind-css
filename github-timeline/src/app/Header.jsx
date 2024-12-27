import GitHubIcon from "@mui/icons-material/GitHub";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import AddIcon from "@mui/icons-material/Add";
import AdjustIcon from "@mui/icons-material/Adjust";
import AppleIcon from "@mui/icons-material/Apple";
import ApprovalIcon from "@mui/icons-material/Approval";
import AdbIcon from "@mui/icons-material/Adb";
import FaceIcon from "@mui/icons-material/Face";
import SearchIcon from "@mui/icons-material/Search";

const Header = () => {
  return (
    <header class="flex justify-between items-center p-4  border-b-2">
      <div class="flex gap-2 items-center">
        <div class="border-2 border-gray-200 px-2 py-1 rounded-md">
          <DensityMediumIcon fontSize="small" />
        </div>
        <div class="flex gap-2 items-center">
          <GitHubIcon fontSize="large" />
          <p class="text-xs sm:text-base">Dashboard</p>
        </div>
      </div>
      <div class="space-x-2 flex items-center">
        <input
          type="text"
          class="border-2 px-2 py-1 rounded hidden lg:block"
          placeholder="Type to search"
        />
        <button class="border-2 px-3 py-1 rounded hover:opacity-70 block lg:hidden">
          <SearchIcon></SearchIcon>
        </button>
        <button class="border-2 px-3 py-1 rounded hover:opacity-70">
          <AddIcon></AddIcon>
        </button>
        <div class="hidden xl:flex">
          <button class="border-2 px-3 py-1 rounded hover:opacity-70">
            <AdjustIcon></AdjustIcon>
          </button>
          <button class="border-2 px-3 py-1 rounded hover:opacity-70">
            <AppleIcon></AppleIcon>
          </button>
          <button class="border-2 px-3 py-1 rounded hover:opacity-70">
            <ApprovalIcon></ApprovalIcon>
          </button>
          <button class="border-2 px-3 py-1 rounded hover:opacity-70">
            <AdbIcon></AdbIcon>
          </button>
        </div>
        <button class="border-2 px-3 py-1 rounded hover:opacity-70">
          <FaceIcon></FaceIcon>
        </button>
      </div>
    </header>
  );
};

export default Header;
