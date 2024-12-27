import FaceIcon from "@mui/icons-material/Face";
import StarOutlineIcon from "@mui/icons-material/StarOutline";

const ExploreSection = () => {
  const repositoriesInfo = [
    {
      name: "GitHub",
      description: "Where the world builds software",
      starCount: "100k",
      language: "c++",
    },
    {
      name: "Density",
      description: "Density is a people counter",
      starCount: "100k",
      language: "c++",
    },
    {
      name: "cure53",
      description: "cure53 is a people counter",
      starCount: "100k",
      language: "javascript",
    },
  ];

  return (
    <div class="bg-slate-200 p-3 border-2 space-y-2 border-gray-500 rounded-lg">
      <p class="font-bold">Explore repositories</p>
      <div class="space-y-2">
        {repositoriesInfo.map((info) => (
          <div
            key={info.name}
            class="flex flex-col space-y-1 border-b-2 border-gray-500"
          >
            <div class="flex justify-between items-center">
              <div class="flex items-center space-x-2">
                <FaceIcon />
                <p>{info.name}</p>
              </div>
              <button class="bg-slate-300 px-2 py-1 rounded-xl">
                <StarOutlineIcon />
              </button>
            </div>
            <p>{info.description}</p>
            <div class="flex space-x-4 items-center">
              <div class="flex space-x-1">
                <StarOutlineIcon fontSize="small" />
                <p>{info.starCount}</p>
              </div>
              <p>{info.language}</p>
            </div>
          </div>
        ))}
      </div>

      <p class="text-blue-700">Explore more →</p>
    </div>
  );
};


export default ExploreSection;