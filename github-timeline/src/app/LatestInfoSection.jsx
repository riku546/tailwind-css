

const LatestInfoSection = () => {
  const latestInfo = [
    {
      time: "last week",
      content: "Copilot Workspace Changelog (December 20th, 2024)",
    },
    {
      time: "last week",
      content: "REST API insights for organizations is now generally available",
    },
    {
      time: "last week",
      content: "GitHub Copilot now supports 11 new languages",
    },
    {
      time: "last week",
      content: "OpenAI o1 is now available in GitHub Copilot Chat (preview)",
    },
  ];
  return (
    <div class="bg-slate-200 p-3 space-y-2 border-2 border-gray-500 rounded-lg">
      <p class="font-bold">Latest changes</p>
      <div class="space-y-3">
        {latestInfo.map((info) => (
          <div key={info.content} >
            <p class="text-sm font-thin">{info.time}</p>
            <p>{info.content}</p>
          </div>
        ))}
      </div>
      <p class="text-sm font-thin">view changelog →</p>
    </div>
  );
};

export default LatestInfoSection;