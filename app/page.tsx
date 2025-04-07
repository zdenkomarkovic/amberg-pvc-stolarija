import About from "@/components/About";
import BackgroundImage from "@/components/BackgroundImage";
import Cardlist from "@/components/Cardlist";
import Cards1 from "@/components/Cards1";
import Cards2Kosina from "@/components/Cards2Kosina";
import HeroOneImg from "@/components/HeroOneImg";
import PozoviteNasOdmahImage from "@/components/PozoviteNasOdmahImage";
import Testemonials from "@/components/Testimonials";
import VideoCard from "@/components/VideoCard";
import { cards1Data, cards2Data, cards2DataText } from "@/constants/index";

export default function Home() {
  return (
    <div className="">
      <HeroOneImg />
      <About />
      <PozoviteNasOdmahImage />
      <Cardlist />
      <Cards2Kosina
        title={"Zašto izabrati Amberg?"}
        data={cards2Data}
        text={cards2DataText}
      />
      <VideoCard />
      <BackgroundImage />
    </div>
  );
}
