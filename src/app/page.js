import Image from "next/image";
import Hero from "./Components/Landing/Hero/Hero";
import OurAchievements from "./Components/Landing/OurAchievements/OurAchievements";
import OurServices from "./Components/Landing/OurServices/OurServices";
import OurBrands from "./Components/Landing/OurBrands/OurBrands";
import PerfectBrands from "./Components/Landing/PerfectBrands/PerfectBrands";
import ExploreSupplements from "./Components/Landing/ExploreSupplements/ExploreSupplements";
import IntroduceTruemed from "./IntroduceTruemed/IntroduceTruemed";
import CustomerReview from "./CustomerReview/CustomerReview";
import WhyTruemed from "./Components/Landing/WhyTruemed/WhyTruemed";
import LatestBlog from "./Components/Landing/LatestBlog/LatestBlog";
import JoinUs from "./Components/Landing/JoinUs/JoinUs";

export default function Home() {
  return (
    <div>
      <Hero />
      <OurAchievements />
      <OurServices />
      <OurBrands />
      <PerfectBrands />
      <ExploreSupplements />
      <IntroduceTruemed />
      <CustomerReview />
      <WhyTruemed />
      <LatestBlog />
      <JoinUs />
    </div>
  );
}
