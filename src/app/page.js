// app/page.jsx
"use client"
import Hero from "./Components/Landing/hero/Hero";
import OurAchievements from "./Components/Landing/our-achievements/OurAchievements";
import OurServices from "./Components/Landing/our-services/OurServices";
import OurBrands from "./Components/Landing/our-brands/OurBrands";
import PerfectBrands from "./Components/Landing/perfect-brands/PerfectBrands";
import ExploreSupplements from "./Components/Landing/ExploreSupplements/ExploreSupplements";
import IntroduceTruemed from "./Components/Landing/introduce-truemed/IntroduceTruemed";
import CustomerReview from "./Components/Landing/customer-review/CustomerReview";
import WhyTruemed from "./Components/Landing/why-truemed/WhyTruemed";
import LatestBlog from "./Components/Landing/latest-blog/LatestBlog";
import JoinUs from "./Components/Landing/join-us/JoinUs";
import { useFetch } from "@/helper/hooks";
import { fetchHomeSlider } from "@/helper/backend";

export default async function Home() {
  const [data, getData, { loading }] = useFetch(fetchHomeSlider)
  console.log("🚀 ~ Home ~ data:", data)
  return (
    <div>
      <Hero data={data} />
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
