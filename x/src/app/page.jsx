import Nav from "@/components/Nav";
import TimeLineContent from "@/components/TimeLineContent";

export default function Home() {
  return (
    <div class="grid grid-cols-mobile-size  md:grid-cols-pc-size">
      <div class="flex justify-center">
        <Nav />
      </div>
      <div class="border-x border-zinc-800 min-h-screen">
        <TimeLineContent />
      </div>
    </div>
  );
}
