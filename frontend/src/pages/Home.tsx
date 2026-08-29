import HomeHero from "../components/home/HomeHero";
import HomeProblems from "../components/home/HomeProblems";
import HomePillars from "../components/home/HomePillars";
import HomeResults from "../components/home/HomeResults";
import HomeRealisations from "../components/home/HomeRealisations";
import HomeMethod from "../components/home/HomeMethod";
import HomeTechnologies from "../components/home/HomeTechnologies";
import HomeCTA from "../components/home/HomeCTA";

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeProblems />
      <HomePillars />
      <HomeResults />
      <HomeRealisations />
      <HomeMethod />
      <HomeTechnologies />
      <HomeCTA /> 
    </>
  );
}