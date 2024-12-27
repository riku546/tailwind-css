import FaceIcon from "@mui/icons-material/Face";
import FacebookIcon from "@mui/icons-material/Facebook";

 const RepositoryNav = () => {
  return (
    <div class="flex flex-col fixed top-0 left-0  items-center h-full w-72 bg-slate-200  px-5 pt-20">
      <div class="w-full space-y-2">
        <div class="flex justify-between items-center">
          <p class="font-bold">Top repositories</p>
          <div class="flex justify-center bg-green-600 opacity-90 px-2 py-1 rounded ">
            <div>
              <FacebookIcon></FacebookIcon>
            </div>
            <button class="text-sm">New</button>
          </div>
        </div>
        <input
          type="text"
          placeholder="Find a repository..."
          class="w-full px-2 py-1 border-2 border-gray-200 rounded-md"
        />
      </div>
      <ul class="space-y-2 mt-4 w-full">
        <div class="flex gap-2 items-center hover:cursor-pointer ">
          <FaceIcon></FaceIcon>
          <li class="hover:border-b-2 hover:border-gray-50">
            riku546/cpp-tutorial
          </li>
        </div>
        <div class="flex gap-2 items-center hover:cursor-pointer">
          <FaceIcon></FaceIcon>
          <li class="hover:border-b-2 hover:border-gray-50">
            riku546/cpp-tutorial
          </li>
        </div>
        <div class="flex gap-2 items-center hover:cursor-pointer">
          <FaceIcon></FaceIcon>
          <li class="hover:border-b-2 hover:border-gray-50">
            riku546/cpp-tutorial
          </li>
        </div>
        <div class="flex gap-2 items-center hover:cursor-pointer">
          <FaceIcon></FaceIcon>
          <li class="hover:border-b-2 hover:border-gray-50">
            riku546/cpp-tutorial
          </li>
        </div>
        <div class="flex gap-2 items-center hover:cursor-pointer">
          <FaceIcon></FaceIcon>
          <li class="hover:border-b-2 hover:border-gray-50">
            riku546/cpp-tutorial
          </li>
        </div>
        <p class="text-sm hover:text-blue-600 cursor-pointer">Show more</p>
      </ul>
    </div>
  );
};


export default RepositoryNav;