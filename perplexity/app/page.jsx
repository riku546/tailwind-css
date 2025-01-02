import MainArea from "./components/MainArea";
import BottomNav from "./components/mobile/BottomNav";
import Header from "./components/mobile/Header";
import SideNav from "./components/pc/SideNav";

export default function page() {
  return (
    <div class="h-screen grid grid-rows-pc md:grid-cols-pc">
      <div class="hidden md:block">
        <SideNav></SideNav>
      </div>
      <div class="px-5  bg-custom2">
        <div class="block border-b border-zinc-700 bg-custom2 py-2 mb-5 md:hidden">
          <Header></Header>
        </div>
        <MainArea></MainArea>
      </div>
        <div class="block py-3 md:hidden">
          <BottomNav></BottomNav>
        </div>
    </div>
  );
}
