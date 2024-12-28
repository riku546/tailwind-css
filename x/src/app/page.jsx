import LeftSideBar from "@/components/LeftSideBar";
import Nav from "@/components/Nav";
import TimeLineContent from "@/components/TimeLineContent";

export default function Home() {
  return (
    <div class="grid grid-cols-mobile-size  sm:grid-cols-tablet-size xl:grid-cols-pc-size">
      <div class="flex justify-end xl:mr-5">
        <Nav />
      </div>
      <div class="border-x border-zinc-800 min-h-screen">
        <TimeLineContent />
      </div>
      <div class="hidden xl:block">
        <LeftSideBar />
      </div>
    </div>
  );
}
