import MainArea from "./components/MainArea";
import SideNav from "./components/pc/SideNav";

export default function page() {
  return (
    <div class="grid grid-cols-pc">
      <SideNav></SideNav>
      
      <MainArea></MainArea>
    </div>
  );
}
