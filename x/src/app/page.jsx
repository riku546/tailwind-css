import Nav from "@/components/Nav";
import TimeLineContent from "@/components/TimeLineContent";

export default function Home() {
  return (
    <div class="grid grid-cols-mobile-size  lg:grid-cols-pc-size">
      <div class="flex justify-end md:mr-5">
        <Nav />
      </div>
      <div class="border-x border-zinc-800 min-h-screen">
        <TimeLineContent />
      </div>
    </div>
  );
}
