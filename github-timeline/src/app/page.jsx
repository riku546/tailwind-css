import Header from "./Header";
import { timeLineDataList } from "./timeLineData";
import Main from "./Main";
import RepositoryNav from "./RepositoryNav";
import LatestInfoSection from "./LatestInfoSection";
import ExploreSection from "./ExploreSection";

export default function page() {
  return (
    <div>
      <div class="w-full absolute z-20 bg-slate-200">
        <Header />
      </div>
      <main class="grid  lg:grid-cols-custom-layout2  xl:grid-cols-custom-layout1">
        <div class="hidden z-0  lg:block">
          <RepositoryNav />
        </div>
        <Main timeLineDataList={timeLineDataList} />
        <div class="hidden mt-20 px-8 py-5 space-y-4 xl:flex flex-col  ">
          <LatestInfoSection />
          <ExploreSection />
        </div>
      </main>
    </div>
  );
}
